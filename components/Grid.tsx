import { section } from 'framer-motion/client'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/GridItems'

const Grid = () => {
  return (
    <section>
        <BentoGrid>
            {gridItems.map
            ((item)=>(
                <BentoGridItem id={item.id} description={item.description} title={item.title} key={item.id}/>
            ))
            }
        </BentoGrid>
    </section>
  )
}

export default Grid
