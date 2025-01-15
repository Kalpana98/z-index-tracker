# **z-index-tracker**

`z-index-tracker` is a developer-friendly tool that scans and analyzes all `z-index` values in the provided path. It supports both static **HTML files** and **live webpages**, generating a clear report of `z-index` values sorted in descending order.

---

## **Features**

- 📂 **Static HTML Support**: Analyzes local HTML files to identify `z-index` values.
- 🌐 **Real-Time DOM Analysis**: Uses Puppeteer to scan live webpages and dynamically loaded elements.
- 📊 **Developer-Friendly Output**: View results in a well-formatted table with tag names, IDs, classes, and `z-index` values sorted by priority.

---

## **Installation**

```bash
npm install z-index-tracker -g
```

---

## **Usage**

### Command

```bash
z-index-tracker scan <input>
```

#### Input Types

1. **Static HTML File:** Provide the path to a local HTML file.
2. **Live Webpage:** Provide the URL of a webpage.

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
