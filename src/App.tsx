import { BooksApiService } from "./apiServices/booksApiService";
import { DataList, TDataListDataFormat } from "./lib";
import "./App.css";

function App() {
  const apiService = new BooksApiService();
  const columns = [{ title: "Título", data: "title" }];

  function dataParser(data: any): TDataListDataFormat {
    console.log(data);

    return {
      data: data.results,
      total: data.count,
    };
  }

  return (
    <div className="App">
      <DataList
        apiService={apiService}
        columns={columns}
        dataParser={dataParser}
        pageLimit={32}
      />
    </div>
  );
}

export default App;
