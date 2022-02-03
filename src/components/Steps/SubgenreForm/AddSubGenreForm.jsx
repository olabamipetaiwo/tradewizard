import { useState } from "react";
import toast from "react-hot-toast";
import useBook from "hooks/useBook";
import useStep from "hooks/useStep";

const AddSubGenreForm = () => {
  const { subgenres, addGenreSubGenre } = useBook();
  const { changeActiveStep } = useStep();
  
  const [subGenre, setSubGenre] = useState({
    name: "",
    isDescriptionRequired: false,
  });

  const handleStep = (id) => {
    changeActiveStep(id);
  };

  const onChange = (e) => {
    if (e.target.name === "isDescriptionRequired") {
      setSubGenre({
        ...subGenre,
        isDescriptionRequired: !subGenre.isDescriptionRequired,
      });
    } else {
      setSubGenre({
        ...subGenre,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subGenre.name.length < 1) {
      toast.error("Name of subgenre is required");
    } else {
      const lastId = subgenres[subgenres.length - 1].id;
      let subGenrePayload = {
        id: lastId + 1,
        ...subGenre,
      };
      await addGenreSubGenre(subGenrePayload);
      handleStep(2);
    }
  };

  return (
    <section className="steps__content mb-sm">
      <div className="flex flex-col">
        <div className="form__group mb-sm ">
          <label>SubGenre Name</label>
          <input
            name="name"
            value={subGenre.name}
            onChange={onChange}
            type="text"
            required
          ></input>
        </div>
        <label className="flex flex-row align-center mb-sm">
          <input
            type="checkbox"
            value={subGenre.isDescriptionRequired}
            onChange={onChange}
            name="isDescriptionRequired"
          />
          <span className="ml-xs p-title">Description is needed</span>
        </label>
      </div>

      <section className="flex align-center justify-end steps__actions">
        <button
          onClick={handleStep.bind(this, 2)}
          className="btn btn-outline mr-sm"
        >
          <span>Back</span>
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Next
        </button>
      </section>
    </section>
  );
};

export default AddSubGenreForm;
