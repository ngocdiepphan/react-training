import React, { useEffect, useState } from "react";
import { TableColumn } from "type/table";
import Button from "../../Buttons";

export interface PanelFormProps<T> {
  columns: TableColumn<T>[];
  data: T;
  onSave: (editedData: T) => void;
  onClosePanel?: () => void;
  onDelete: (deleteData: T) => void;
}

const PanelForm = <T,>({
  columns,
  data,
  onClosePanel,
  onSave,
  onDelete,
}: PanelFormProps<T>) => {
  const [editedData, setEditedData] = useState<T>(data);

  useEffect(() => {
    setEditedData(data);
  }, [data]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSave = () => {
    onSave(editedData);
  };

  const handleDelete = () => {
    onDelete(data);
  };

  return (
    <>
      <div className="sticky top-0 flex items-center z-1 bg-primary border-b border-gray-400">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center pl-20">
            <span
              className="bg-back w-20 h-20 cursor-pointer"
              onClick={onClosePanel}
            ></span>
          </div>
          <div className="flex-grow flex justify-center">
            <p className="py-20 cursor-pointer text-hoverPrimary font-bold hover:text-white hover:bg-hoverPrimary">
              General
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-40 justify-end m-30">
        <Button type="button" variant="confirm" onClick={handleDelete}>
          Delete
        </Button>
        <Button type="button" variant="confirm" onClick={handleSave}>
          Save
        </Button>
      </div>

      <form className="flex flex-col items-start overflow-auto sticky t-0 mt-80 mr-30 ml-40">
        {columns.map((column) => (
          <div
            key={String(column.key)}
            className="text-center items-baseline grid grid-cols-[100px_1fr] mb-20 gap-10 justify-start"
          >
            <label className="mr-20 font-medium">{column.header}</label>
            {column.key === "category" || column.key === "ratings" ? (
              <select
                className="max-w-212 border p-8 font-medium text-quaternary rounded outline-none hover:border-hoverPrimary"
                name={column.key.toString()}
                value={editedData[column.key] as string}
                onChange={handleInputChange}
              >
                {(() => {
                  switch (column.key) {
                    case "category":
                      return (
                        <>
                          <option value="">Please select</option>
                          <option value="Pasta">Pasta</option>
                          <option value="Pizza">Pizza</option>
                          <option value="Vegan">Vegan</option>
                          <option value="Desserts">Desserts</option>
                          <option value="Smoothies">Smoothies</option>
                          <option value="Breakfast">Breakfast</option>
                        </>
                      );
                    case "ratings":
                      return (
                        <>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </>
                      );
                    default:
                  }
                })()}
              </select>
            ) : (
              <input
                type="text"
                name={column.key.toString()}
                className="max-w-212 border p-8 font-medium text-quaternary rounded outline-none hover:border-hoverPrimary"
                value={editedData[column.key] as string}
                onChange={handleInputChange}
              />
            )}
          </div>
        ))}
      </form>
    </>
  );
};

export default PanelForm;
