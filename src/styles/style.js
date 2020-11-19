import { Color } from '../constants/constant';

const root = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    backgroundColor: 'white'
};

const header = {
    padding: 0,
    height: '9vh',
    backgroundColor: Color.blue
};

const body = {
    height: '91vh'
}

const bodyContext = {
    height:'100%',
    overflow:'hidden',
    paddingLeft:'20%',
    paddingRight:'20%'
}

const title = {
    color: "white",
    fontSize: 22,
    padding: '0px 10px 0px 10px'
};

const progressContainer = {
    height: '100vh',
    width: '100%',
    top: 0,
    left: 0,
    background: 'rgba(255,255,255,0.5)',
    position: 'absolute'
};

const progress = {
    color: '#348216',
    position: 'absolute',
};

const appbar = {
    boxShadow: "none"
};

const dropDownMenu = {
    vertical: 'top',
    horizontal: 'right'
}

export {root, header, body,bodyContext, title, progressContainer, progress, appbar, dropDownMenu };