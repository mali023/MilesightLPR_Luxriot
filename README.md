# 📷 Milesight LPR Integration with Luxriot

A **Node.js** middleware application that integrates **Milesight LPR (License Plate Recognition) cameras** with **Luxriot EVO S VMS**. This app captures LPR data from cameras and sends it to Luxriot VMS via TCP sockets, allowing real-time display of license plate information.

## 🚀 Features

- 📡 **Receives LPR data** from multiple **Milesight** cameras.
- 🔄 **Filters duplicate plates** to avoid redundant entries.
- 🔗 **Sends data to Luxriot EVO S** via TCP socket connections.
- 📊 **Supports multiple LPR streams**, each mapped to a separate Luxriot camera feed.
- ⚡ **Lightweight, fast, and efficient** implementation using Node.js.

## 🏗️ How It Works

1. The application listens for **HTTP POST requests** on endpoints corresponding to different LPR camera streams (`/lpr1`, `/lpr2`, `/lpr3`, `/lpr4`).
2. When an LPR camera detects a plate, it sends the data in a **JSON payload** (e.g., `{"plate": "ABC123"}`).
3. The app **filters out duplicate plates** and sends new entries to Luxriot EVO S via **TCP sockets**.
4. Luxriot EVO S receives the formatted LPR data and **displays it in the corresponding video feed**.

## 📦 Installation

### Prerequisites

- **Node.js** (v14+ recommended)
- **npm** or **yarn**
- **Milesight LPR Camera**
- **Luxriot EVO S VMS**

### Setup

1. Clone this repository:

   ```sh
   git clone https://github.com/mali023/MilesightLPR_Luxriot.git
   cd MilesightLPR_Luxriot
2. Install dependencies

   ```sh
   npm install

3. Configure environment variables in a .env file:

   ```sh
   PORT=9090

4. Start the application:
    ```sh
    npm start
