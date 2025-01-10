# **z-index-tracker**

`z-index-tracker` is a developer-friendly tool to track and analyze all `z-index` values used in a project. It scans both static HTML files and live webpages, providing a clear, sortable report of `z-index` values in your application.

---

## **Features**
- 📂 **Static HTML Support**: Analyze local HTML files to identify `z-index` values.
- 🌐 **Real-Time DOM Analysis**: Use Puppeteer to scan live webpages and dynamically loaded elements.
- 📊 **Developer-Friendly Output**: View results in a well-formatted table with tag names, IDs, classes, and `z-index` values sorted by priority.

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/z-index-tracker.git
   cd z-index-tracker
   ```
2.	Install dependencies:
    ```bash
    npm install
    ```

---

## **Usage**

### Command
```bash
z-index-tracker scan <input>
```
#### Input Types
1.	Static HTML File: Provide the path to a local HTML file.
2.	Live Webpage: Provide the URL of a webpage. (**COMING SOON**)

---

## **Requirements**
- Node.js: Version >= 20.x
- For real-time DOM analysis, ensure the following:
- Puppeteer is installed (npm install puppeteer).
- Network access is available if scanning a live webpage.

---

## **Future Enhancements**
- 🌈 Add visualization for z-index layers.
- 🔄 Enable real-time monitoring of DOM changes.
- 💾 Generate exportable reports in JSON/CSV formats.

---

## **Contributing**
Contributions are welcomed! Please feel free to:
1. Fork the repository.
2. Create a new branch.
3. Submit a pull request.
