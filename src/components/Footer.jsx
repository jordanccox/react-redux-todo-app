export default function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md mt-3">
          Filter by Status:
          <br />
          [ ] All
          <br />
          [ ] Completed
          <br />[ ] Active
        </div>
        <div className="col-md mt-3">
          Actions:
          <br />
          [ ] Select All
          <br />
          [ ] Delete Selected
          <br />
          [ ] Mark Selected as Complete
          <br />[ ] Mark Selected as Active
        </div>
        <div className="col-md mt-3">
          Filter by Category:
          <br />
          [ ] Work
          <br />
          [ ] Home
          <br />
          [ ] School
          <br />[ ] Add custom category
        </div>
      </div>
    </div>
  );
}
