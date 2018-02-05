import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Audio } from 'components';
import { Link } from 'react-router-dom';

const Player = ({ detail, loading, failed, ...props }) => {
    return (
        <div {...props}>
            {!detail && loading && <p>Loading...</p>/* This should never render on the browser */}
            {failed && <p>Failed to load clip, sorry!</p>}
            {detail &&
                <div>
                    <Helmet>
                        <title>{detail.title}</title>
                        <meta property='og:title' content={detail.title} />
                    </Helmet>
                    <h2>{detail.title}</h2>
                    <Audio src={detail.url} autoPlay />
                    <Link to={`/clips`}>back 2 the clips</Link>
                </div>
            }
        </div>
    );
};

Player.propTypes = {
    detail: PropTypes.object,
    loading: PropTypes.bool,
    failed: PropTypes.bool
};

export default Player;
