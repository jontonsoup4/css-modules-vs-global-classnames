import React from 'react'

import styles1 from './styles-module.scss'
import styles2 from './styles-global.scss'

const TestComponent1 = () => {
  return (
    <div className={styles1['layer1']}>
      <div className={styles1['layer2']}>
        <div className={styles1['layer3']}>
          <div className={styles1['layer4']}>
            <div className={styles1['layer5']}>
              <div className={styles1['layer6']}>
                <div className={styles1['layer7']}>
                  <div className={styles1['layer8']}>
                    <div className={styles1['layer9']}>
                      <div className={styles1['layer10']}>
                        Test Test
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const TestComponent2 = () => {
  return (
    <div className={styles2['layer1']}>
      <div className='layer2'>
        <div className='layer3'>
          <div className='layer4'>
            <div className='layer5'>
              <div className='layer6'>
                <div className='layer7'>
                  <div className='layer8'>
                    <div className='layer9'>
                      <div className='layer10'>
                        Test Test
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export {
  TestComponent1,
  TestComponent2
}
