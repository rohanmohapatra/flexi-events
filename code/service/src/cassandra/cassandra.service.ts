import { Injectable } from '@nestjs/common';
import { Client, mapping, auth } from 'cassandra-driver';

@Injectable()
export class CassandraService {
  client: Client;
  mapper: mapping.Mapper;
  private createClient() {
    this.client = new Client({
      contactPoints: ['0.0.0.0'],
      keyspace: process.env.CASSANDRA_KEYSPACE,
      localDataCenter: 'datacenter1',
      authProvider: new auth.PlainTextAuthProvider(
        process.env.CASSANDRA_USERNAME,
        process.env.CASSANDRA_PASSWORD,
      ),
    });
  }

  createMapper(mappingOptions: mapping.MappingOptions) {
    if (this.client == undefined) {
      this.createClient();
    }
    return new mapping.Mapper(this.client, mappingOptions);
  }
}