# Interest Web APP

### React-Router v6
应用全包裹:
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
```
使用示例：
```javascript
import {Link, NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to={'/'}>Home</Link> | {" "}
        <Link to={'/invoices'}>Invoices</Link> | {" "}
        <Link to={'/expenses'}>Expenses</Link>
      </nav>
      <Routes>
        {/* index 索引路由 索引路由是父路由的默认子路由 当父路由匹配但其他子路由都不匹配时，索引路由匹配 */}
        <Route index path={'/'} element={<Homes />} />
        <Route path={'expenses'} element={<Expenses />}>
          <Route path={'children1'} element={<Child1/>}/>
        </Route>
        <Route path={'invoices'} element={<Invoices />}>
          <Route path={'children2'} element={<Child2/>}/>
          {/* 读取URL参数 /invoices/123 */}
          <Route path={":invoiceId"} element={<Invoice />}/>
        </Route>
        {/* 无匹配路由时的显示 */}
        <Route path={"*"} element={
          <main style={{ padding: '1rem'}}>
            <p>There's nothing here!</p>
          </main>
        }/>
      </Routes>
    </div>
  );
}

export function Homes() {
  return (
    <h2>Home</h2>
  );
}

export function Expenses() {
  return (
    <>
      <h2>Expenses</h2>
      <nav>
        <Link to={'children1'}>one</Link>
      </nav>
      {/*< Outlet /> 给子路由占位*/}
      <Outlet />
    </>
  );
}

export function Invoices() {
  return (
    <>
      <h2>Invoices</h2>
      <nav>
        <Link to={'children2'}>two</Link> | {" "}
        {/* 动态链接 NavLink  <NavLink className={({ isActive }) => isActive ? "red" : "blue"} /> */}
        <NavLink
          style={({isActive}) => {
              return {
                color: isActive ? "red" : "",
              }
            }
          }
          to={'/invoices/123'}>123</NavLink>
      </nav>
      {/*< Outlet /> 给子路由占位*/}
      <Outlet />
    </>
  );
}

export function Invoice() {
  /* 读取URL参数 传参接收 */
  let params = useParams();
  return (
    <>
      <h3>Invoice</h3>
      <p>{params.invoiceId}</p>
    </>
  );
}

export function Child1() {
  return (
    <h3>Child One</h3>
  );
}

export function Child2() {
  return (
    <h3>Child Two</h3>
  );
}

export default App;
```