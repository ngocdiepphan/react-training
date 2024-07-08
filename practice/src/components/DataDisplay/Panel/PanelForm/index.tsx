import React from "react";
import { TableColumn } from "type/table";

export interface PanelFormProps<T> {
  columns: TableColumn<T>[];
  data: T;
}

const PanelForm = <T,>({ columns, data }: PanelFormProps<T>) => {
  return (
    <form className="flex flex-col items-start overflow-auto sticky t-0 mt-80 mr-30 ml-40">
      {columns.map((column) => (
        <div
          key={String(column.key)}
          className="panel__item text-center items-baseline grid mb-20 grid-cols-[100px_1fr] mr-20 gap-10 justify-items-start"
        >
          <label className="panel__label mr-20 font-medium">
            {column.header}
          </label>
          {column.key === "img" ? (
            <input
              id={`${String(column.key)}-input`}
              type="text"
              className="panel__input w-212 border p-8 font-medium text-quaternary rounded outline-none hover:border-hoverPrimary"
              value={data[column.key] as string}
            />
          ) : column.key === "category" || column.key === "ratings" ? (
            <select
              id={`${String(column.key)}-input`}
              className="panel__input w-212 border p-8 font-medium text-quaternary rounded outline-none hover:border-hoverPrimary"
              value={data[column.key] as string}
            >
              {column.key === "category" && (
                <>
                  <option value="">Please select</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Smoothies">Smoothies</option>
                  <option value="Breakfast">Breakfast</option>
                </>
              )}
              {column.key === "ratings" && (
                <>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </>
              )}
            </select>
          ) : (
            <input
              id={`${String(column.key)}-input`}
              type="text"
              className="panel__input w-212 border p-8 font-medium text-quaternary rounded outline-none hover:border-hoverPrimary"
              value={data[column.key] as string}
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default PanelForm;
