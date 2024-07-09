import React from "react";
import { TableColumn } from "type/table";
import Button from "../../../Inputs/Buttons";

export interface PanelFormProps<T> {
  columns: TableColumn<T>[];
  data: T;
}

const PanelForm = <T,>({ columns, data }: PanelFormProps<T>) => {
  return (
    <aside className="bg-primary border border-gray-300 fixed h-full w-full top-0 left-0 m-0 md:right-auto lg:ml-10 lg:static lg:w-500">
      <div className="sticky top-0 flex items-center z-1 bg-white border-b border-gray-400">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center pl-20">
            <span className="bg-back w-20 h-20"></span>
          </div>
          <div className="flex-grow flex justify-center">
            <p className="py-20 cursor-pointer text-hoverPrimary font-bold hover:text-white hover:bg-hoverPrimary">
              General
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-40 justify-end m-30">
        <Button type="button" variant="confirm">
          Delete
        </Button>
        <Button type="button" variant="confirm">
          Save
        </Button>
      </div>

      <form className="flex flex-col items-start overflow-auto sticky t-0 mt-80 mr-30 ml-40">
        {columns.map((column) => (
          <div
            key={String(column.key)}
          className="text-center items-baseline grid grid-cols-[100px_1fr] mb-20 gap-10 justify-start"
          >
            <label className="mr-20 font-medium">
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
    </aside>
  );
};

export default PanelForm;
