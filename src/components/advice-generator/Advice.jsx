import React, { useEffect, useState } from 'react'
import './advice.css'
import imgDivider from '../../images/pattern-divider-desktop.svg'
import dice from '../../images/icon-dice.svg'
import AdviceService from '../../services/advice-service'
import loading from '../../images/loading-gif.gif'

const Advice = () => {

    const [advice, setAdvice] = useState("")
    const [adviceNumber, setAdviceNumber] = useState(0)
    const [loading, setLoading] = useState(false)

    let getAdvice = async () => {
        setLoading(true)
        let response = await AdviceService.getAdvice()
        setLoading(false)
        setAdvice(response.data.slip.advice)
        setAdviceNumber(response.data.slip.id)
    }

    return (
        <div>
            <div className="card">
                <p className='advice-number'>
                    {adviceNumber > 0 && `ADVICE #${adviceNumber}`}
                </p>
                {
                    advice.length === 0 && !loading
                    && <h6 className='advice'>
                        Click the button below to get your advice in life.
                    </h6>

                }
                {
                    advice.length > 0 && !loading
                    && <h2 className='advice'>
                        "{advice}"
                    </h2>
                }

                {
                    loading &&
                    <>
                        <h2 className='advice'>Please wait ...</h2>
                    </>
                }

                <img className='divider' src={imgDivider} alt="" />
                <div className='dice' onClick={getAdvice}>
                    <img src={dice} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Advice
