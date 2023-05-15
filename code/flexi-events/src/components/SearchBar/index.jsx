import React from "react";
import PropTypes from "prop-types";
import { Paper, Input, IconButton, useTheme, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const styles = (theme) => ({
  root: {
    // height: "4rem",
    display: "flex",
    p: "0.3rem",
    px: "0.7rem",
    justifyContent: "space-between",
    color: "black",
    bgcolor: "white",
  },
  iconButton: {
    color: "black",
    transform: "scale(1, 1)",
    transition: theme.transitions.create(["transform", "color"], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  iconButtonHidden: {
    transform: "scale(0, 0)",
    "& > $icon": {
      opacity: 0,
    },
  },
  searchIconButton: {
    marginRight: theme.spacing(-6),
  },
  icon: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  input: { color: "black", fontWeight: 600 },
  searchContainer: {
    justifyContent: "center",
    // margin: "auto 16px",
    width: `100%`, // 6 button + 4 margin
  },
});

/**
 * Material design search bar
 * @see [Search patterns](https://material.io/archive/guidelines/patterns/search.html)
 */
const SearchBar = React.forwardRef(
  (
    {
      // @ts-ignore
      cancelOnEscape,
      // @ts-ignore
      className,
      // @ts-ignore
      classes,
      // @ts-ignore
      closeIcon,
      // @ts-ignore
      disabled,
      // @ts-ignore
      onCancelSearch,
      // @ts-ignore
      onRequestSearch,
      // @ts-ignore
      searchIcon,
      // @ts-ignore
      style,
      ...inputProps
    },
    ref
  ) => {
    const inputRef = React.useRef();
    // @ts-ignore
    const [value, setValue] = React.useState(inputProps.value);

    React.useEffect(() => {
      // @ts-ignore
      setValue(inputProps.value);
      // @ts-ignore
    }, [inputProps.value]);

    const handleFocus = React.useCallback(
      (e) => {
        // @ts-ignore
        if (inputProps.onFocus) {
          // @ts-ignore
          inputProps.onFocus(e);
        }
      },
      // @ts-ignore
      [inputProps.onFocus]
    );

    const handleBlur = React.useCallback(
      (e) => {
        setValue((v) => v.trim());
        // @ts-ignore
        if (inputProps.onBlur) {
          // @ts-ignore
          inputProps.onBlur(e);
        }
      },
      // @ts-ignore
      [inputProps.onBlur]
    );

    const handleInput = React.useCallback(
      (e) => {
        setValue(e.target.value);
        // @ts-ignore
        if (inputProps.onChange) {
          // @ts-ignore
          inputProps.onChange(e.target.value);
        }
      },
      // @ts-ignore
      [inputProps.onChange]
    );

    const handleCancel = React.useCallback(() => {
      setValue("");
      if (onCancelSearch) {
        onCancelSearch();
      }
    }, [onCancelSearch]);

    const handleRequestSearch = React.useCallback(() => {
      if (onRequestSearch) {
        onRequestSearch(value);
      }
    }, [onRequestSearch, value]);

    const handleKeyUp = React.useCallback(
      (e) => {
        if (e.charCode === 13 || e.key === "Enter") {
          handleRequestSearch();
        } else if (
          cancelOnEscape &&
          (e.charCode === 27 || e.key === "Escape")
        ) {
          handleCancel();
        }
        // @ts-ignore
        if (inputProps.onKeyUp) {
          // @ts-ignore
          inputProps.onKeyUp(e);
        }
      },
      // @ts-ignore
      [handleRequestSearch, cancelOnEscape, handleCancel, inputProps.onKeyUp]
    );

    React.useImperativeHandle(ref, () => ({
      focus: () => {
        // @ts-ignore
        inputRef.current.focus();
      },
      blur: () => {
        // @ts-ignore
        inputRef.current.blur();
      },
    }));

    const theme = useTheme();

    return (
      <Paper sx={styles(theme).root} style={style}>
        <Stack style={styles(theme).searchContainer}>
          <Input
            {...inputProps}
            inputRef={inputRef}
            onBlur={handleBlur}
            value={value}
            onChange={handleInput}
            onKeyUp={handleKeyUp}
            onFocus={handleFocus}
            fullWidth
            sx={styles(theme).input}
            disableUnderline
            disabled={disabled}
          />
        </Stack>
        <IconButton
          onClick={handleRequestSearch}
          sx={{
            ...styles(theme).iconButton,
            // ...styles(theme).searchIconButton,
            ...(value !== "" && { ...styles(theme).iconButtonHidden }),
          }}
          disabled={disabled}
        >
          {React.cloneElement(searchIcon)}
        </IconButton>
        <IconButton
          onClick={handleCancel}
          sx={{
            ...styles(theme).iconButton,
            ...(value === "" && { ...styles(theme).iconButtonHidden }),
          }}
          disabled={disabled}
        >
          {React.cloneElement(closeIcon)}
        </IconButton>
      </Paper>
    );
  }
);

SearchBar.defaultProps = {
  // @ts-ignore
  className: "",
  closeIcon: <ClearIcon />,
  disabled: false,
  placeholder: "Search",
  searchIcon: <SearchIcon />,
  style: null,
  value: "",
};

SearchBar.propTypes = {
  /** Whether to clear search on escape */
  // @ts-ignore
  cancelOnEscape: PropTypes.bool,
  /** Override or extend the styles applied to the component. */
  classes: PropTypes.object.isRequired,
  /** Custom top-level class */
  className: PropTypes.string,
  /** Override the close icon. */
  closeIcon: PropTypes.node,
  /** Disables text field. */
  disabled: PropTypes.bool,
  /** Fired when the search is cancelled. */
  onCancelSearch: PropTypes.func,
  /** Fired when the text value changes. */
  onChange: PropTypes.func,
  /** Fired when the search icon is clicked. */
  onRequestSearch: PropTypes.func,
  /** Sets placeholder text for the embedded text field. */
  placeholder: PropTypes.string,
  /** Override the search icon. */
  searchIcon: PropTypes.node,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object,
  /** The value of the text field. */
  value: PropTypes.string,
};

// @ts-ignore
export default SearchBar;
