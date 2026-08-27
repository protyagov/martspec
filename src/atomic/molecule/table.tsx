import React, { CSSProperties } from "react";
import "@/sass/molecule/table.scss";

export interface TableData {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
  caption?: string; // SEO описание
}

interface TableProps {
  data: TableData;
  transformMobile?: boolean;
  headerBgColor?: CSSProperties["color"];
  firstColumnBgColor?: CSSProperties["color"];
  textBgColor?: CSSProperties["color"];
}

export default function Table({
  data,
  transformMobile = true,
  headerBgColor = "#E2E3E5",
  firstColumnBgColor,
  textBgColor = "#FFFFFF",
}: TableProps) {
  const tableStyles = {
    "--header-bg": headerBgColor,
    "--first-col-bg": firstColumnBgColor || textBgColor,
    "--text-bg": textBgColor,
  } as React.CSSProperties;

  return (
    <div className={`table-wrapper ${!transformMobile ? "table-responsive" : ""}`} style={tableStyles}>
      <table className={`custom-table ${transformMobile ? "table-transform-mobile" : "table-classic"}`}>
        {data.caption && <caption className="visually-hidden">{data.caption}</caption>}
        
        <thead>
          <tr>
            {data.headers.map((header, idx) => (
              <th key={idx} scope="col">
                <h3>{header}</h3>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const isFirstCol = cellIndex === 0;
                return isFirstCol ? (
                  <th key={cellIndex} scope="row" className="first-column">
                    <h3>{cell}</h3>
                  </th>
                ) : (
                  <td key={cellIndex}>{cell}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}