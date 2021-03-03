import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends Component {
    render() {
        return (
			<div class="content d-flex justify-content-center align-items-center">

				<div class="flex-fill">

					<div class="text-center mb-3">
						<h1 class="error-title">404</h1>
						<h5>Oops, an error has occurred. Page not found!</h5>
					</div>

				</div>

			</div>
        )
    }
}