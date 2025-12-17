# My Licktionary - Client 🎹

The frontend interface for **My Licktionary**. Designed to help musicians visualize, manage, and practice their personal library of jazz vocabulary.

## ✨ Features

* **Visual Notation:** Renders ABC notation text into beautiful sheet music using `abcjs`.
* **Audio Context:** Embedded YouTube/Audio playback via `react-player` allows users to play along with the original recording.
* **Smart Organization:** Filter licks by Key, Artist, Source, or custom Tags.
* **Responsive:** Optimized for use on desktop or tablet (digital music stand).

## 🛠 Tech Stack

* **Framework:** React
* **Build Tool:** Vite (recommended) or Create React App
* **Key Libraries:** 
  * `abcjs` (Music notation rendering)
  * `react-player` (Media embedding)
  * `axios` (API consumption)

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+)
* The **licktionary-api** backend running on port 5000

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/MQUEMADO16/licktionary-client.git
cd licktionary-client
npm install
```