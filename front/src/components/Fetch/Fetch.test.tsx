import * as enzyme from "enzyme"
import * as React from "react"
import Fetch from "./Fetch"

it("Has state 'loading' when fetching", () => {
  const el = enzyme.shallow(
    <Fetch url="https://jsonplaceholder.typicode.com/posts/1">
      {({ isLoading }) => <div className="isLoading">{isLoading}</div>}
    </Fetch>
  )
  expect(el.state().loading).toBeFalsy()
  setTimeout(() => expect(el.state().loading).toBeFalsy(), 300)
})
