import React from 'react'
import * as XLSX from 'xlsx';
import './FileUpload.css';

export default function FileUpload() {
   
  
    const [jsonData, setJsonData] = React.useState(null);

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
          const file = e.target.files[0];
          const allowedExtensions = ["xlsx"]
          const fileExtension = file.name.split(".").pop().toLowerCase();
          if (!allowedExtensions.includes(fileExtension)) {
            alert("Please upload only xlsx files.");
            return;
          }
      
          const reader = new FileReader();
          reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);

            const camelCaseJson = json.map((row) => {
              const camelCaseRow = {};
              Object.entries(row).forEach(([key, value]) => {
                const camelCaseKey = key.replace(/\s+/g, ''); // Remove whitespaces
                camelCaseRow[camelCaseKey === '0' ? key : toCamelCase(camelCaseKey)] = value;
              });
              return camelCaseRow;
            });

            setJsonData(camelCaseJson);
            console.log("hai",json);
          };
          reader.readAsArrayBuffer(file);
        }
        const toCamelCase = (str) => {
          const camelCaseKey = str.replace(/([-_][a-z])/gi, ($1) => {
            return $1.toUpperCase().replace("-", "").replace("_", "").replace("-", "");
          });
          return camelCaseKey.charAt(0).toLowerCase() + camelCaseKey.slice(1);
        };
      };
     
  return (
    <div >
      <form>
    <label htmlFor="upload"><h1>Upload File</h1></label>
    <input
        type="file"
        name="upload"
        id="upload"
        onChange={readUploadFile}
    />
</form>
{jsonData && (
        <div className="json-container">
          <h3>Converted JSON Data:</h3>
          <pre className="json-text">{JSON.stringify(jsonData, null, 2)}</pre>

        </div>
      )}
    </div>
  )
}
