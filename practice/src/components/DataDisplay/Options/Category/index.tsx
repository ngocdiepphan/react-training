import Drawer from "@/components/DataDisplay/Drawer";

const OptionCategory: React.FC = () => {
  return (
    <>
      <select
        id="input_category"
        className="border border-save w-180 p-8 outline-none h-40 cursor-pointer md:w-220 hover:border-hover"
      >
        <option value=""></option>
        <option value="Pasta">Pasta</option>
        <option value="Pizza">Pizza</option>
        <option value="Vegan">Vegan</option>
        <option value="Desserts">Desserts</option>
        <option value="Smoothies">Smoothies</option>
        <option value="Breakfast">Breakfast</option>
      </select>
    </>
  );
};

export default OptionCategory;
