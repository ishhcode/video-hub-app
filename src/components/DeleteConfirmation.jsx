import React from "react";
import { ImBin } from "./icons.js";

function DeleteConfirmation({ onCancel, onDelete,comment, tweet,video }) {
    return (
        <>
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
                <form
                    onSubmit={handleSubmit(updateVideo)}
                    className=" bg-black space-y-2 border outline-none p-2"
                >
                    <div className="flex justify-between items-center border-b border-slate-500 px-3 py-1">
                        <div>
                            <h2 className="font-bold">Edit Video</h2>
                            <p className="text-xs mb-2">
                                Share where you`ve worked on your profile.
                            </p>
                        </div>
                        <IoCloseCircleOutline
                            size={23}
                            onClick={handleClosePopUp}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="p-2 space-y-2">
                        <Input2
                            type="file"
                            label="Thumbnail *"
                            accept="image/png, image/jpeg"
                            {...register("thumbnail", {
                                required: "Thumbnail is required ",
                            })}
                        />
                        <span className="text-red-500 text-xs">
                            {errors.thumbnail?.message}
                        </span>
                        <Input2
                            type="text"
                            label="Title *"
                            // value={title}
                            {...register("title", {
                                required: "Title is required",
                            })}
                        />
                        <span className="text-red-500 text-xs">
                            {errors.title?.message}
                        </span>
                        <div className="mb-4">
                            <label>Description *</label>
                            <textarea
                                rows="5"
                                className="focus:bg-[#222222] text-sm overflow-y-scroll bg-transparent outline-none border w-full mt-1 p-1"
                                {...register("description", {
                                    required: "Description is required",
                                })}
                            ></textarea>
                            <span className="text-red-500 text-xs">
                                {errors.description?.message}
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                className="flex-1 border p-2"
                                onClick={handleClosePopUp}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="flex-1 bg-[#FD7014] p-2 font-bold"
                                textColor="text-black"
                                type="submit"
                            >
                                Update
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
    </>
    );
}

export default DeleteConfirmation;