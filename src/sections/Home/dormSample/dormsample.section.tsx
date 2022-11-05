import { Box, Typography } from "@mui/material"
import { CardComponent } from "components"
import { SliderComponent } from "components/cardSlider/cardSlider/cardSlider.component"
import { SliderIdEnum } from "types"
import './dormSample.css';

const sliders = [
  {
    sliderId: SliderIdEnum.zone,
    component: <SliderComponent/>,
  },
  {
    sliderId: SliderIdEnum.popular,
    component: <SliderComponent/>,
  },
]
  
export const DormSampleSection: React.FC = () => {
    return (
        <div className="Box-zone">
            <Box py={4}>
                <SliderComponent/>
                <SliderComponent/>
            </Box>
        </div>
    )
}