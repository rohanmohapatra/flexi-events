## Initialize Cassandra

```
create keyspace flexievents with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
```

## Create Table

```
create table participants (event_id uuid, name text, email text, phone_number text, PRIMARY KEY(event_id, email));
```
