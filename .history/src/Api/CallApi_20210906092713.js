import axios from "axios"
import { connect } from "react-redux"


const callApi = async () => {
  try {
    await axios({
      url: "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST",
      method: "GET"
    }).then((resp) => {
      this.props.setDatabase(resp.data)
    })
  } catch (err) { console.log(err) }
}

const mapStateToProps = (state, ownProps) => {
  return {
    database: state.database
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setDatabase: (data) => {
      dispatch({ type: "SET_DB", data })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(callApi)