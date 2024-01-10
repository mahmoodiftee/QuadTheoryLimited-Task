import React from 'react';

const Modal = ({ onAddItem }) => {
    const handleAddFood = (e) => {
        e.preventDefault();
        const Name = e.target.name.value;
        const ImageUrl = e.target.url.value;
        const newItem = { Name, ImageUrl };
        onAddItem(newItem);
        document.getElementById('my_modal_3').close();
    };

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-center text-xl">Add Item</h3>
                <form onSubmit={handleAddFood} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="FOOD NAME" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image url</span>
                        </label>
                        <input type="text" name='url' placeholder="IMAGE URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">ADD</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default Modal;