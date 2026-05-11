FROM confluentinc/cp-kafka-connect-base:7.9.6

RUN    confluent-hub install --no-prompt confluentinc/kafka-connect-jdbc:latest \
    && confluent-hub install --no-prompt debezium/debezium-connector-postgresql:latest