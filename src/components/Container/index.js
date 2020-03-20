import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bucketlistActions from '../../actions/bucketlistActions';
import {
	StyleSheet,
	Image,
	View,
	Platform
} from 'react-native';

import bgSrc from '../../images/bg.jpg';

class Container extends Component {
	render() {
		const {
			children,
			bucketlists,
			actions,
			formData,
			visibilityFilter,
			userData,
			condition,
		} = this.props;

		const renderChildren = Array.isArray(children) ?
			children.map((child, key) => React.cloneElement(child, {
				key,
				bucketlists,
				actions,
				formData,
				visibilityFilter,
				userData,
				condition,
			}))
			:
			React.cloneElement(children, {
				bucketlists,
				actions,
				formData,
				visibilityFilter,
				userData,
				condition,
			});

		if (this.props.wallpaper) {
			return (
				<Image style={[this.props.style, styles.picture]}
						source={this.props.source}
				>
					{renderChildren}
				</Image>
			);
		}

		return (
			<View style={[this.props.style, styles.view]}>
				{renderChildren}
			</View>
		);
	}
}

const statusbarTop = (Platform.OS === 'ios') ? 20 : 0;

const styles = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
		top: statusbarTop,
	},
	view: {
		top: statusbarTop,
	}
});

Container.defaultProps = {
	source: bgSrc,
	wallpaper: true,
};

Container.propTypes = {
	style: PropTypes.number,
	source: PropTypes.number,
	wallpaper: PropTypes.bool,
	bucketlists: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	formData: PropTypes.object.isRequired,
	visibilityFilter: PropTypes.string.isRequired,
	userData: PropTypes.object.isRequired,
	condition: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		bucketlists: state.bucketlists,
		formData: state.formData,
		visibilityFilter: state.visibilityFilter,
		userData: state.userData,
		condition: state.condition,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(bucketlistActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
