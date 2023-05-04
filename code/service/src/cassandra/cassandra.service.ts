import { Injectable } from '@nestjs/common';
import { Client, mapping, auth } from 'cassandra-driver';

type ConnectType = 'astra' | 'local';

@Injectable()
export class CassandraService {
  client: Client;
  mapper: mapping.Mapper;
  private createClient(type: ConnectType) {
    if (type === 'astra') {
      this.client = new Client({
        cloud: {
          secureConnectBundle: './secure-connect-flexievents.zip',
        },
        keyspace: process.env.CASSANDRA_KEYSPACE,
        credentials: {
          username: process.env.CASSANDRA_CLIENT_ID,
          password: process.env.CASSANDRA_CLIENT_SECRET,
        },
      });
    } else {
      this.client = new Client({
        contactPoints: [process.env.CASSANDRA_SERVER],
        keyspace: process.env.CASSANDRA_KEYSPACE,
        protocolOptions: { port: parseInt(process.env.CASSANDRA_PORT) ?? 9042 },
        localDataCenter: 'datacenter1',
        authProvider: new auth.PlainTextAuthProvider(
          process.env.CASSANDRA_USERNAME,
          process.env.CASSANDRA_PASSWORD,
        ),
      });
    }
  }

  createMapper(mappingOptions: mapping.MappingOptions) {
    const connectType = process.env.CASSANDRA_CONNECT as ConnectType;
    if (this.client == undefined) {
      this.createClient(connectType);
    }
    return new mapping.Mapper(this.client, mappingOptions);
  }
}
