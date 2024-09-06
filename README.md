# Dapr Publisher-Subscriber Example

Docker Compose setup demonstrating a basic publisher-subscriber pattern using Dapr. The setup includes a publisher service and a subscriber service, both using Dapr for service-to-service communication. Redis is used as a component for pub/sub messaging.

## Services Overview

1. **Publisher Service**
    - **Description:** A service that publishes messages to a topic.
    - **Port:** 3001

2. **Dapr Publisher**
    - **Description:** Dapr sidecar for the Publisher Service.
    - **Ports:** 3500 (Dapr HTTP Port)
    - **App ID:** `publisher`
    - **Placement Port:** 50006

3. **Subscriber Service**
    - **Description:** A service that subscribes to messages from the publisher.
    - **Port:** 3002

4. **Dapr Subscriber**
    - **Description:** Dapr sidecar for the Subscriber Service.
    - **Ports:** 3500 (Dapr HTTP Port)
    - **App ID:** `subscriber`
    - **Placement Port:** 50006

5. **Redis**
    - **Description:** A Redis instance used as the message broker for pub/sub.
    - **Port:** 6379

6. **Dapr Placement Service**
    - **Description:** Dapr placement service for managing the Dapr runtime instances.
    - **Port:** 50006

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone git@github.com:france-kradev/dapr-pubsub-sample.git
   cd dapr-pubsub-sample.git
