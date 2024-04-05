const ListHeader = () => {
  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="flex flex-row justify-between rounded-md p-1 text-lg font-bold">
      {/* ListItem detail titles */}
      <div className="flex flex-row justify-start gap-4">
        <p className="w-10 text-right">S/N</p>
        <p className="w-[35rem] text-left">Title</p>
      </div>

      {/* Button titles - placeholder */}
      <div className="w-36 text-right pr-2">Actions</div>
    </div>
  );
};

export default ListHeader;
