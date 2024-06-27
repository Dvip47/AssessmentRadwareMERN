import { Typography } from '@mui/material'
import React from 'react'

const DataIssue = (props) => {
    return (
        <>
            {props?.error && <Typography>Error loading item.</Typography>}

            {props?.loading && !props?.error ? <Typography>Loading...</Typography>
                :
                <Typography variant="subtitle1" color="textSecondary">No Record Found</Typography>
            }
        </>
    )
}

export default DataIssue