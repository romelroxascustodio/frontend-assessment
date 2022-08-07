import { useState } from "react"
import data from "../../api/data.json"
import * as Icon from 'react-icons/fa'

export default function TabsAccordion() {

  const [id, setId] = useState(0)

  const onClick = index => {
    if(id === index) {
      return setId(null)
    }

    setId(index)
  }

  return (
    <>
        <section className="tabs__accordion">
            <div className="tabs__accordion__container max-w-7xl mx-auto">
                <div className="tabs_accordion__nav divide-x-2">
                {data.map((data, index) => (
                  <div className={`tabs__accordion__item ${id === index ? "active" : '' }`}
                  onClick={() => onClick(index)} 
                  key={data + index}>{data.title}</div>
                ))}
                </div>
                <div className="tabs__accordion__content">
                {data.map((data, index) => (
                  <div className={`tabs__accordion__card ${id === index ? "active" : '' }`} key={data + index}>
                    <div className="tabs__accordion__header" onClick={() => onClick(index)}>
                      <div className="tabs__accordion__heading">{data.title}</div>
                      {
                        (id === index) ?
                          <Icon.FaMinus className="tabs__accordion__icon" />
                        :
                          <Icon.FaPlus className="tabs__accordion__icon" />
                      }
                    </div>
                    <div className={`tabs__accordion__body ${id === index ? "active" : '' }`} dangerouslySetInnerHTML={{__html:data.content}}></div>
                  </div>
                ))}
                </div>
            </div>
        </section>
    </>
  )
}
