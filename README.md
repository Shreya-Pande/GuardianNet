# GuardianNet 🛡️

**GuardianNet** is an AI-powered, privacy-preserving **Intrusion Detection System (IDS)** that leverages machine learning to detect malicious network activity, logs these alerts **immutably on the blockchain**, and offers a real-time dashboard for users to monitor suspicious behavior. It combines **decentralized security**, **AI detection**, and **privacy-focused architecture** for next-gen cyber defense.

---

## 🔍 Features

- ✅ **Real-time Threat Detection** using AI models (Autoencoders/LSTMs)
- 🔒 **Immutable Logging** of alerts on the Ethereum blockchain via smart contracts
- 📈 **Dashboard** showing all alerts, including blocked malicious IPs
- 👁️ **Filter malicious logs** and view their actions
- 🌐 **MetaMask Integration** for secure authentication and transactions
- 🧠 Designed with **Federated Learning/Homomorphic Encryption** in mind for future privacy enhancements

---

## 🧱 Tech Stack

| Layer         | Tech Used                                                                 |
|---------------|---------------------------------------------------------------------------|
| Frontend      | React.js, Ethers.js, MetaMask, CSS                                        |
| Backend       | Flask (for AI model), Node (optional future extensions)                   |
| Blockchain    | Solidity, Hardhat, Ethers.js, Ethereum Local Network                      |
| ML Model      | Autoencoder / LSTM (PyTorch), trained on network traffic data             |
| Security      | Federated Learning (planned), Homomorphic Encryption (planned)            |

---

## 🛠️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/GuardianNet.git
   cd GuardianNet
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Run Hardhat Node (Local Blockchain)**
   ```bash
   npx hardhat node
   ```

4. **Deploy Smart Contract**
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

5. **Start Frontend**
   ```bash
   npm start
   ```

6. **Connect MetaMask**
   - Switch MetaMask network to `localhost:8545`
   - Import an account using the private key from Hardhat

---

## 📜 Smart Contract (Solidity)

- **Contract Name**: `GuardianNet`
- **Functions**:
  - `logAlert(string category, string severity, string description)`: Logs a new alert
  - `getAllAlerts()`: Fetches all alerts
- **Data Stored**:
  - `id`: Unique alert ID
  - `category`: e.g., Malicious, Suspicious
  - `severity`: e.g., High, Medium, Low
  - `description`: Details of the event
  - `timestamp`: UNIX timestamp (block time)

All logs are permanently recorded on-chain, creating an immutable audit trail.

---

## 🖥️ Frontend Integration

- Uses `Ethers.js` to:
  - Connect with MetaMask via `BrowserProvider`
  - Fetch `signer` and interact with the deployed smart contract
  - Call `getAllAlerts()` to fetch alert logs
- Displays:
  - **All Logs** (dummy + fetched)
  - **Malicious Logs** filtered from alert severity or type
  - **Blocked IP Table** from hardcoded blacklist

---

## 🧠 AI Intrusion Detection (Planned/Prototype)

- The IDS is trained on labeled network traffic using:
  - **Autoencoders** for anomaly detection
  - **LSTM-based models** for sequential threat patterns
- These models will eventually send logs to the smart contract in real-time using a Flask API

---

## 🔐 Privacy-Preserving Features

- 🧩 **Federated Learning**: Model training occurs locally, no data leaves the device
- 🔐 **Homomorphic Encryption**: Future plans to allow encrypted traffic to be analyzed without decryption

---

## 📸 Screenshots

| Dashboard | Malicious Logs |
|----------|----------------|
| ![Dashboard](screenshots/dashboard.png) | ![Malicious Logs](screenshots/malicious.png) |

---

## 🚀 Future Enhancements

- ✅ Integrate Flask backend for real-time alerts from ML models
- ✅ Add UI for contract deployment on testnets (Goerli/Polygon)
- ⏳ Live model performance graph
- ⏳ Alert notification system
- ⏳ Decentralized frontend hosting (e.g., IPFS + ENS)

---

## 🤝 Contributing

Pull requests and feedback are welcome! For major changes, please open an issue first.

---

## 📝 License

MIT © 2025 GuardianNet Team

---

## 📬 Contact

For demo requests or collaborations, contact:  
**Email**: guardiannet.dev@protonmail.com  
**LinkedIn**: [YourName](https://linkedin.com/in/yourprofile)