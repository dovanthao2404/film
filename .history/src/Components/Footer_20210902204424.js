import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="contact">
          <h2>Liên hệ</h2>
          <ul>
            <li><i class="mr-2 fab fa-facebook"></i><a target="_blank" href="https://www.facebook.com/dovanthao197">Đỗ
              Văn
              Thảo</a></li>
            <li><i class="mr-2 fab fa-instagram"></i><a target="_blank"
              href="https://www.instagram.com/dovanthao_rename/">dovanthao_rename</a></li>
            <li><i class="mr-2 fa fa-phone"></i>0905550453</li>
          </ul>
        </div>
        <div class="copyright text-center">
          <span>© Do not copyright</span>
        </div>
      </footer>
    )
  }
}
