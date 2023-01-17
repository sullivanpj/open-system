import { Publisher, toPascalCase } from "../utils";

export const Publishers = ({ publishers }: { publishers: Publisher[] }) => {
  if (publishers.length === 0) {
    return null;
  }

  return (
    <>{`protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            // TODO: Send message on custom events, below is a timing example.
            var rnd = new Random((int) DateTime.Now.Ticks);
            while (!stoppingToken.IsCancellationRequested)
            {
                var message = new ${toPascalCase(publishers[0].messageType)}();
                _amqpService.${toPascalCase(
                  publishers[0].operationId
                )}(message);
                await Task.Delay(rnd.Next(500, 3000), stoppingToken);
            }
        }`}</>
  );
};
