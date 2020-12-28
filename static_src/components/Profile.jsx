import React from 'react';
import connect from "react-redux/es/connect/connect";

class Profile extends React.Component {
    render() {
        return <>
            <h1>Profile</h1>
            <div>Hello: <b>{this.props.profile.name}</b></div>
            <div>
                {this.props.profile.desc}
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci asperiores veniam error exercitationem quibusdam quam pariatur molestiae mollitia! Quasi laboriosam aspernatur nihil veniam debitis deserunt sit quis aut qui dolorem! Quas recusandae fugiat mollitia blanditiis officiis esse quia nisi aspernatur excepturi placeat ratione accusantium libero sequi, iure magni, nihil soluta.</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto neque nisi natus consequuntur dolorem facere in fugiat assumenda, aut distinctio laboriosam saepe ex fuga voluptates ad possimus expedita suscipit quia at quam harum blanditiis. Excepturi, aliquid corporis. Neque et, pariatur omnis molestiae fugit iusto repellendus fuga deserunt voluptatum recusandae quia nostrum, maxime quam veniam non expedita officia. Impedit doloremque iusto modi veritatis natus aliquam nesciunt soluta fugit, inventore, labore illum enim eligendi corporis culpa. Ipsam a voluptates assumenda illum ipsa eos adipisci incidunt quis quos non, harum aperiam dignissimos explicabo quo excepturi sit fugit tenetur similique. Officiis, optio quos.</span>
        </>
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    profile: profileReducer.profile,
});

export default connect(mapStateToProps)(Profile);