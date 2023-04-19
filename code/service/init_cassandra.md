## Initialize Cassandra

```
create keyspace flexievents with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
```

## Create Table

```
create table participants (event_id uuid, name text, email text, phone_number text, PRIMARY KEY(event_id, email));
create table events( event_id uuid, event_description text, keywords list<text>, start_date timestamp, end_data timestamp, event_link text, PRIMARY KEY(event_id));
create table users (username text, password text, PRIMARY KEY(username));
```
