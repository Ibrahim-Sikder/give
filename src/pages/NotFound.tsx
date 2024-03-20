import Container from "../ui/Container";

const NotFound = () => {
  return (
    <Container className=" w-full h-[80vh] flex items-center justify-center text-center  ">
      <div>
        <h1 className="mb-5">OOPS!</h1>
        <h3>Page Could Not Found</h3>
      </div>
    </Container>
  );
};

export default NotFound;
