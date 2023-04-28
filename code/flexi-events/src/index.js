import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { create } from '@mui/material/styles/createTransitions';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme_1 = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    }
  }

})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme_1}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


// app.get('/profile', (req, res) => {
//   sqlConn.query(`SELECT * FROM flexi_user WHERE username = '${req.session.username}';`, function (err, qres_user, fields) {
//       if (err) {
//           throw err;
//       }
//       else {
//           sqlConn.query(`SELECT * FROM event e, participates p WHERE e.id_event = p.event_id AND user_id = ${req.session.id_flexi_user} ORDER BY e.begin_date;`, function (err, qres_event, fields) {
//               if (err) {
//                   throw err;
//               }
//               else {
//                   res.render('pages/profile', {
//                       user_data: qres_user,
//                       event_data: qres_event
//                   });
//               }
//           })
//       }
//   })
// });






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
