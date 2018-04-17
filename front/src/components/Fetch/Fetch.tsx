import { configure } from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import * as React from "react"
configure({ adapter: new Adapter() })

interface IProps {
  url: string
  children: (props: IState) => any
}

interface IState {
  hasFetched: boolean
  isLoading: boolean
  isError: boolean
  data: any
}

export default class Fetch extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      data: null,
      hasFetched: false,
      isLoading: false,
      isError: false
    }
  }

  private async fetch(url: string) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      this.concludeFetch(false, data)
    } catch (e) {
      this.concludeFetch(true, null)
    }
  }

  private concludeFetch(isError: boolean, data: any) {
    this.setState({
      hasFetched: true,
      isLoading: false,
      isError,
      data
    })
  }

  public componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevProps.url !== this.props.url) {
      this.fetch(this.props.url)
    }
  }

  public render() {
    return this.props.children(this.state)
  }
}
