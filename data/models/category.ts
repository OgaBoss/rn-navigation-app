interface ICategory {
  id: string;
  title: string;
  color: string;
}

class Category implements ICategory {
  public id: string;

  public title: string;

  public color: string;

  constructor(
    id: string,
    title: string,
    color: string  // default color
  ) {
    this.color = color;
    this.title = title;
    this.id = id;
  }
}


export default Category;
