import React from "react";
import { Box, Typography } from "@mui/material";

import './dormReview.css'

export const DormReviewSection: React.FC = () => {
    return(
        <div>
            <div className="Box-zone">
                <Box py={4}>
                    {/* <Typography variant="h6" >(Dorm-Review)</Typography> */}
                    <h1>
                        Review
                    </h1>
                    {/* {children} */}
                    <div className="Box-Review">
                        Reviewer 1
                    </div>
                    <div className="Box-Review">
                        Reviewer 2
                    </div>
                    <div className="Box-Review">
                        Reviewer 3
                    </div>
                    <div className="Box-Review">
                        Reviewer 4
                    </div>

                </Box>
            </div>
        </div>
    )
}