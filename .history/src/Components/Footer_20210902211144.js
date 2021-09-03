import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer>
          <div className="contact">
            <h2>Liên hệ</h2>
            <ul>
              <li><i className="mr-2 fab fa-facebook" /><a target="_blank" rel="noreferrer" href="https://www.facebook.com/dovanthao197">Đỗ
                Văn
                Thảo</a></li>
              <li><i className="mr-2 fab fa-instagram" /><a target="_blank" rel="noreferrer" href="https://www.instagram.com/dovanthao_rename/">dovanthao_rename</a></li>
              <li><i className="mr-2 fa fa-phone" />0905550453</li>
            </ul>
          </div>
          <div className="copyright text-center">
            <span>© Do not copyright</span>
          </div>
        </footer>
      </div>
    )
  }
}
