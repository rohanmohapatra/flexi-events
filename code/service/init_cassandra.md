## Initialize Cassandra

```
create keyspace flexievents with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
```

## Create Table

```
create table participants (event_id uuid, name text, email text, phone_number text, PRIMARY KEY(event_id, email));
create table events( event_id uuid, event_title text, event_description text, keywords list<text>, start_date timestamp, end_data timestamp, event_link text, email text, PRIMARY KEY(email, event_id));
create table users (email text, name text, phone_number text, role text, pronouns text, PRIMARY KEY(email));
create table auth (email text, password text, PRIMARY KEY(email));
```
