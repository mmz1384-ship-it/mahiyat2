import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");

  const accountTable = [
    { name: "صندوق", type: "دارایی", nature: "بدهکار" },
    { name: "بانک", type: "دارایی", nature: "بدهکار" },
    { name: "فروش", type: "درآمد", nature: "بستانکار" },
    { name: "هزینه", type: "هزینه", nature: "بدهکار" },
    { name: "سرمایه", type: "حقوق صاحبان سرمایه", nature: "بستانکار" },
    { name: "بدهی کوتاه مدت", type: "بدهی", nature: "بستانکار" }
  ];

  const handleSearch = () => {
    if (!query.trim()) return;
    const filtered = accountTable
      .filter(item => item.name.includes(query))
      .map(item => `${item.name} (${item.type}) - ${item.nature}`)
      .join("\n");
    setResults(filtered || "نتیجه‌ای پیدا نشد.");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>آموزش ماهیت حساب‌ها</h1>
      <input
        type="text"
        placeholder="یک کلمه وارد کنید"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
        جستجو
      </button>
      {results && (
        <div style={{ marginTop: "20px", background: "#f5f5f5", padding: "10px", whiteSpace: "pre-line" }}>
          <strong>نتیجه:</strong>
          <p>{results}</p>
        </div>
      )}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);