import { useEffect, useRef } from "react";

export function ImageEffectCanvas() {
  const canvasRef = useRef(null);
  const myImage = new Image();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 706;

    myImage.src =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADwANYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8/o+lTVApzmpl6V9Yj4GROpxg1MpqstWF7VujnkTr0qRfuioVNPVuhqzFlhT1qSPpUMdPH3q3RzyRZQ0+oFbgVMpytWjF9x6tinhqjoq7kEppuaZk0Zp3CwE0UlI3TNSMax+aoHp7VE3U1DNUIfu1G33TTmqJjzWUjeKGP2qJjUjGo261kzeJFI3FQtUjtlqiaspG8SGQ9ajP3adJ96mMeKxZ0xIqKKKwNCcfeqZDVepY26V0GMkTqasIeKr5p6Ng1rE55ItKakWoFbvUqmtTBomVulSK2VxUCmng1pEylEnU81IGqBWyuKcrYrRMwaLAf8acrVAH9qXdV3IsWKN2Oc1Bn2o3UXFYkaSo2amFqbupXLURWbtTT900m7HSmFqi5pGIhOOaYxpWbNRM1ZNm6Q1jUTt2p7GoHas2axQhqJjT2NQuaxkdEURt941G9P8AWom61lLY3ihrUU1mxRWRutieM8CpFqBTzUuc1sjGRYVqerYqBG4FTK1WjnkieNqlU1WVqlV+Oa2TMWiwpp6mooUeaRY0VnkY7VVRkk9qkZXiYrIrI65BDZBGDjBqzKxL2zSq1Q7qcGxxVqRm4k26lBqFW59Kdu9CM1XMZ8pL+NB+tSWNnc6hKI7eMyPnHA+UH3Ndz4Y+HNhqrQreX08Stu3TQoDGG2ZVAeGOTx268Zq4+87ImVoK8mcBuFKu6RSVUlR1IHH4mvStS8J6P4btGEqNd3sibNsg2rAQBuOf4mHTk455GeBraL8P7jUdHS8MsdvbSyiB/MucS7gpZcQjkrwPmGBkkZoScr2M/bU4q7Z42xx3/CmM2fpXvUvgHQbqPTbGLT7y4uru4MUbwTbpnkIGFCMGUjg8dfmznmqknwQs/OUo6tCD86zFkfAOD8yDAPBzuAwRio5Xa4RxVLqzwtmprGvYvG3wi0a2tYbvR5dSsDPLJm2uohcwwIMbMzJgknnOV4xXm+qeCtX0sbntftEJGVltz5qsPXAOcfhUTi4OzOunUhUV0zAkbqKhanSZ3EEbSOMen51EzVztnWkIzYqBjlqe7dqjrM3ihGb5aiJob71MkbFYyN0iJ2+aimmisjYtLT42xVeNu1S5rROxlJEwPNSq1QI1SJlm4GT6VstTCSLCtmur8B/D3WviJq8Wn6NZtczSPsJAyS2M4UYLM2AeAP8AGq+leDbvdYTajaXMFldjdC4XZ5yBirNGx+XAOct0GMdcV65oKzeB8tpTmLU1kKx3kDNEYWHOxV6x5yTk85OARzXdRpe+vaJpfieZiMQqcf3bvJlXTdH0Pwz4R1fSbqWztNXba0k13bPJenapZViABCo7NtPOMhS3BqOGHSvFXgkpNC63WmhZBcXDiTz1Y7GUKpHlrwpBXg8jrWNJBPcapc3t3b79RvrsrJLJKysUIO6NlJJYHjgDIGORnB34tBS3s9Vt7Rpr+aTT2CljsAEYDbmGM4Gw4H17YrqnLmSio2S0+V9P6Rwc3Lq5at3/AEf9M4j/AIQ/T9StZJtNv5oZIwzSQ3UDFQoIG7euSBlgBnjkc5rIu/Cup2jTYtjcLGfma3Icc9OAc/pXtHwy8O3HxK8a+HNHud/2e5uYrNmthHBLNCkfyurZCh1ATJz253HJqfxx8G7rTfFmo2GjaxHbwWb7I4r24WIMegCMCQHJ6jgHk1nKj7vPHYPrkY1VSlva/l9/c+emDx8MpXtgjGfqDXT+CfCsPia6nW6uJrSNUYQvHAZd8w5VCAchScD8a6fWfDus6eGW9tXn8teIpLbzIpCOoEoUgse2CD7CtPwn8T9D8HxadFfeHYpFw5P2dCjIx3DnLk8ZVuoOSOvSohZSTlsdNSUnBukrs6KTwVJ8NdFk0fV9Khe81iKOa3a6iKNGq/OGjbIBUg8jnIOckjiLTbiBlCzQyxxNIpE8OHVl6ERjgHhgMj6cVs3Wuap4ov7LVdC1eTUfLtRAIL6RPtSxlSHUITgDDEfIfqQRgN0vwV4h8deJNUW4ivl1ySJns7WPTdxnkICYXyz5YAG1uOpXPHNdbjGpJRpX02Ttt6+p5F5Wbq6Prv6bWHXGmaLc+Kr/AOy2Op6tDbK8toJYFkeOFASGwDhsDLNnp7VVbxBpjMZFa7lRlB83ygAvsSTwf6dMjmqsOk3kdu1hetNDJaMYWBBVwW/i35ywwCD1yB71kWnh+e61aTT4J4g6wvMsccirGYkUsxPmcNwD79hzXO48z5UveLVNW96WiOg1i8tNe04tpb3KzwSrdQSSAou45B2HccMOeT/drW8F291bw6lcYhmEJX7da3M5WR5myBsHU88sR3AB4ArN8KzWsOgwyW09ssjzNIElV8bSflPKgYypwMdcV0lmqXCGW4KqyxbRJvBUZKk5wNpHbHbGa0oxTfvHDipOmnFFS8aPVrdkub270dFdg/2Yq2wHkMCo3Aggkc89KwZtKktbppLe+/tcAL+4uAZY2Xsy/MWBxgY6Zziu01Pw3Bp80tt/aFjdrNEs+6zcSgrgOFz0BAJDDsTT/GF9o+rRadPpGjQ6VfWlr5aSxszvM6/ekJPIJ6jHGelbVaMYxbb1Rz4bEylJJLRnKz/DvQPHWm3FtNbW2m3WzzPtDqysjDj5JMFivPQhlPsRXz144+HmreB7p1u4mktM/JcoMrjsD1xn6kf09uk1++uLy3tozHJKHCyTT4AZicAFhjaeRnPU57gVpafrC64txpl3a3N5HHl82sfnKi88Hg8dRggg4rzOR1HZLU+ipYieHV5O8T5QPPNRM/avaPiZ8D57Lw/L4s8Nxx3ehQyfZ7uO2kEjW74DbtuSyrzt54B6eg8VbIJzz/XPSuWpFwdpI9+jUhWjzQdxGPFQM3NPkbk1CxrmZ2xQjUVEzZoqLm1idWqaN6qo9SK2DmqRnKJbXtXV+D/D51S8i8yGWSHeqFUyGZicBcnoPU9hk1yloN0icZyccV7z4F8EuLe0tbtJhc+as8kKR7o1XCkgkE4ZlI/AD/aA78NTdSWiPJxtaNCF2zT8M2tlJa2z6tcThbaBo7JbYeYhkyT8yucLGGbjb+IySTv2fhmab7Pc3cdxoyJbma21CUYhYEkB5JMMdriNlBUHLL6DIjk0yUafHLbQqLUFrYOpjUxqvzbSCSwbDZ7ck13+l63aL4Q0zTbPSAt9A0qXN5JNI4nA+ZAVJwNuThvVjX09CjG16nRff/X4fl+e4rGSjK8ev9f1/wAMed6Ho8dvppubiB73VVfzGQIQDhBsLFTkuD7dwTzmmyaen9mauJbho3gs5ZyrbSfN/ujbwOvOe+M16UdL0GPwLcat/bkkGtrdKg0103IqYzu38Akn+Hk85rzqz02bVI/Ed3HEGtIdLcJEpz5f7xMjGOScDnAzWFSjyWLw+K9q+Yb8HPDs3ib4qeH9PW2kDR3kNuTDGWITcWK4A5OC/TrjJ65qf4tiHwz8UNbs9HupItEllkWCJg6xHJ+ZBHzgk4I+b5ST83NUPhh4mh8IeKNM1q8nmhitZ2ZpLRw0oRuFUFQATv3YHYE10PxG8QaPq3jDUr/RbR5NDvH+0R2iv5kw3jqz5DI3J4wD2I71L5fq/LfW56LlP6zz2urf1/W/bqcZpHjqa3/5CMhjtVbyjcRiQyxknlWUsAwABOGwfpVjWPGega1eGLU4Es5h+8h1LT3aGRot2FY/KN3CqcbcgDntWfrPg06qZdV037VdpJHsaSGIBAzDDblz8mdrZB+vcVzOqadBFdrcrDcXMQxvt7fEmwrhdwIXG0qBwM8EZ5xXmyuetT9lJ3TszasfB8P2zzvD+uWl445FreutvKV5IKvGcZyQc4B/WvVdK8ceKvA2j29zr2najpl1dn/RNbs3xA0cfEpcjJUklMHI79Sa+eri1g00nz7bNrtLW9w867255Kb1HGSQcA4KnPOK07Hx5qmkQR7b+We237YoleSWMggYCeZ0PynIxn17VnGXI7m9XDOskn7y8ztPEBsdH1h765vybPUYnlimA85Q4BfbvBHGfyyfQ1Tl1DSLq38q5aR5GXfDH5OQjEZDk5z0xxnkZzxijR/iHpmqWr6PqnhyC6S7VpBLasy7XUZB2ngPk8joBkHcDWE2naLPbySeH/Er2QJLSreQgjk5wXQZ2k/xHIOOccVMpXd7kqly6SumjtktZdPup7K3aPUBEsY+1ebiN8EHKkdMgnqeOnY1pR6Xq3n3lpNqtrN5LDfJYuZYduRlgU6r05NcX4dtfE2hy3DQkXEFxC8BvLEi5jwRnBxkqGKj0rotL8WXE8mpXd5NG2oTHbcxxSBY5GP8LKmB3+5935fUYG8KkIq/U4a1CUtrM3LeFYbgS3NyRHI4aNoF8t254KnPXBHUU5tQNhJC14yvFMyx208ahZY8jEZfIICgkduTWRNqEt3rbTizWF5pw32OPLRwc9PmJOB7ng9ewqjqej6jGLLUmDmwm3NG6FZXaQfeIAPY4GD2ByOlNzlUvyq6RzxoxhbmHat4dufO+120iTtu/ei6dgRIcnfz8oBI9h1rufhvf6xo/iASzTz+HrK/ha2nvYY1xJG6bjHu7EgnHJ4HNPabTY/7PS2t/sdxPY+dN/aE2YZmKeYPLYZwSCAsZycnk9qxEmu7S4iluWa4zC46YJ5wmB0B5x06g1004SpNTicVWs6sHB6fmP8AEXiaLT9Y1HVrOwWwjkmRLu0twQskZIDHafYBsZIBORwa8d+L3wzt9Ns5PEuihU0mRlMkPQIWOAU9QTjI7ZBHBAHqGvFI9Nt/n815JlEK8krw3ySgDJA3Ebe2ewOK3tN8Kwaz8KvF+l6hDMdSuowllH5oMdsAGcKePmKkLgrxtYdxgcdem6l2z08HiPq/LJPTRP0PjFm/wqJmqS63RykMu0919Pb8OlVmbjNeFI+8ihGbFFRs2TRUXRtykobIzUiNn61WR6lR8kVUWQ4mzpcrw3EMsTtHJGwdZFOCpHIIPqMfWvsH4K/Ea3+GurafqDy3l+Yb2S9voWAX7Ucbc7TnD4DDJGMsT1r5B0uPcwP9cV9B2On3N1qEdiIJLiOYrF9ntQD1JLsWPAz8vf8AKvcwLlHY+PzhRlC0tl+n+R1+qahpnjfxdd32kaXJZ21xcF1sfkLRgngHKnPGAT+eM16X/Ztlo+iaYt7d3kdrcQfa44oH+ZXLbYyVK7SCAfunoe3JrldP8J3ehyf2RcwSJqjMoTy5CpfIOVLEZ52j5/bA9a0NP1Sz1bxBZ2UljNfFm+zwW8UqREnadhPGQAw7dcepr6iF5P3lqz80rThUSdN+6tvQwvH1rcaJIltIFgt2P7ppQsylcZOCCwzyOq8+vHEVlbTx+AdZW11D7fPc2qCeEwjFsVlLbeRycAHIHfHrXSDwLJ4b8YWtp4slWyK2qy7G2TCUKFKx7VI3bhtwoIJIGSDk1c8X3Nx428L6tqK6dY+Go9Q1NZv3drJ5jrFsjMSAZYjJJ6c7TyCSKqpSXK3935m9Go01Htv954lHDDJqCJcxWkYiQxJFMCFldkJLsEPysCQenUAdjWDqFrYRt9oK3EVwx2yOJDGUlIBbLHqTy3OO9dPf20c08sgnaUiI7rV0A8pmwApLHHGScgj8SMVlXGpadHHdpcac0o8pZA0eAY8kYxv+8AxbpjrXjTifW0ZM6vwb8arjwF4P1fR20J9SudTtgqTX2WeFS2WYkFRyAOo6HtWn4F+KXgzT9Blgk0uHSb6O3ZJ1CyTxTMzEh1AJKYUgEZPAzXk2sTvcTTmLy762LFQbmOTYMHb0yVTpnGB1xnisi3s7lrO5lTUo9O+RdixNuViHA4MYO0f7351lLEVI2S6eRtLLsPiIyU18Vr20udvqXw7HieG4udJjF9CX80RWcx2oOuUDHco/i2kHo3XqOEubBfDsd7ZzaeCGXzDI07s7YYAnAUFeCeuP9rimadDc6bcTXtnd30d0ysmbFMmNgCWb72dpwCDwOo7V3fhj4qC6VbbxjpkOq2qgoRcbFuFcjCsqqM4JweOMf7wNeY3d3PbUalOPu+8vxOT8H3lppt8ILdGmiuI2DxrHHggcqrBgSrNx8wIOMdqw1WFbtmsbBllRiQpjjdz124OQG+mAfY17x4R8JeDdc16xvtMW8VrkMZbW3Rbh5ULD7oc7vmJIHPXArzzxx8N7PS/EmqWtrr7C5hZY3t7xGhuIo35VMsAC5VlDY5HA4HV8r5bjp14SqOOzsc3oevHTboJa3ktnfqDv+wlhGoHVcIwCnJ5b7ueMYyT2uk/ETS7qxe01K1j1i8WVAbyaIiRQVIA3JtZhjPzFm6jHFecX9jdaf+6lsGhibgXKwGeVsd933Wxjt0rLO77LPb3F+Lu0wNnyuCpDDAUbflOM/Kep/Osua250yoQq6n0FpOpaPNJbxrrCafyGS3vE81eD/Cw5/MZqrc+EdY02R3unlvYd25msfnVhnnByD39BXh9q39iTtNBdxX9srbjazRuYxjqJV7H2Uj69q7Pw38TrrS7Rbi3uCYYv9YIWkUqoOAfmUqfw4IIz0zWlOpqcFbBzirw1PYfCtuh0GMz2Nx5DTmCNpflV2wCRjqCuRzgcEV1YuLWbT5IDDG1ssihWZgJU4xw57cCuO8E/FDQtWuM65HGkIRt19bqeoHAMbLgHcFyAQR9K7Wz8KaN4gtPtWn+IVnjaRWUQpnlQRjaeh57V6kKiVrHyOIozhJ86sZUehpZ6hqGngQ7FcsPKxOvnLlHKMvB+9yQOeOeDWr4dt5be31DI82KGUqAuNxwMyZz6EkY9q76z+GfhXQ7Sy1Kw8Q3C3xsZp5IxEQ63KMCq7RyueDuPpRpaQ6loNzeahqTyzSDcTDaBDLyEIJGBuwpOW5PPfNdFWnGzaZ51PFPmt6HwB8bvB7eE/H+q2oQrBK/2qHg8xyfMOvocj8K83Zq+hv2rdLjtfFGmXUasFuLID52DHKnOM8f3h69q+dpG+Yivk8RFRm7H67l1V1sPGT7DWaimM1FcZ6w9WqaNvmGaqq1SK+1gaaYmjr9F2ll3HC98cnHevp7w74dks2uNUnsLsrYRxRQmxU+Wtw4+VplfBG7B4Hp27/Mnge4tf7c04X0/2az85TNMUL7Ezydo68du9fXvinWLrxh4ksr+4s4/DVhfRCOCdbd3t9qIAHKjd8zbfU4LjoCK+sy2mpU3O+q6fq+x+fZ05KSp20fX+tzRW81S8hurq8uPtskMYeR5pABIoJCrhscAntnP/Aao3XiaO606xsm0yxtLqzZs6kn7uafPIVsZ24I4Yc+vGccNJqUl3IYfsi+V5bkuHKb3GCx+Y9Py6g967Hw34ftdcum1aQLYaWowlpAzMjuFwUVz97JGSeg3Yya9mNSydnqfESwyg02rLp/kafgGEXd9Zarrsct5p1rOJ5Id7F7nYSCFfAK4xy4OQSAOSBXWCzu/H3ix4/CjrBc3DEW+nySkYVmJKovJfHQn2z3JPGeI9YvLwm2kH2VQi2sQZfMCRDAC4xgqPmJUDoM1Jaw2+nnUdc0C/v7aOwkQGeaw8+C2EqbC5YHCFnPyqeeFbjbipVV1FaT0/H/gl+w6xVn/AMH+v8g1SSx1C61Kw17Tlnmj/culsFjKgOOGGcqR1Bx1FcxefDOO4swNCuxtWX/U3yGT5AN+Dx8vPbA/WodQk+23FxdTTyavNPvd5pAszu2N2dzP1zk4A71JB4mGmq0VzLqMluwKRrMyoY2LD5gehwM/Lx97v0PnVGrux7dGnUgtHqec694T1jQVa41S3nt0O4brMtcxSLno+04Vc54J9sVyu6C8t7x4IvMuHEcYmWT92BuHylBgr7DpX0d48+Imh6PdaRbaPNfahEbNDcTvAiyvN1b5uc4yADjlQvAxmsywHg3xpDO17Z27TFlxvhSKTdkn/WIQu76kk9K5K8OSo4Xueth8VNU1OcGeCaRfas00VnM2+Ddue3kwU8s8OAR0wMNwe1TaH9ibUpVvGuDFDEBYLDEjb59w2gnPIxndjBHA6Yr6Ysfhb4abyoLRFklMgby7i4d9hAzhDjPfPcE8dqr6X+z3A264vXjWwlEqW0UTq8kcmQCrKCoEbZwW5657VPsXG0lr6mkc2oyvF6Gb+zR4YW+1TUbyfSp4LbTIplMH2hoPs5Rm5LD5gF2ITggtgYIxXzl8SNT1LUvG2q6pdRtdzTXcrLdea8qOpYLnI4wcAcjPPIr2H40fESXwLocHhTw6xtp9QjE1+beVQUtyPkjGM/f5Y/7O0d6+fmvtQjjS8P2hjKQJ1VWXcy8h+ARzwOnVTmuOpUTgqa6ano4CjWlWqYmo1yytZdbf8E1bLxVcw82uyLbxtH7w7ASOhJDIMk/MM9s45G3pHi9bZYmu4FSW4HlmXTo/KkEbAq3mQkFScjHAxyea5OC2Ek4uxbTpHG5k+120W1lGQRlTwHz2BUdwSAaje0mv5vPt7iBLtgMxpKV3c5C7eWGCo4AwcdfXm5mexKjCXQ7DR/BFz4mFxeeGrm3vHtQGeB41imXJwUKkANjjoV69+2VcaBqvh++jS80b+zp423HzI2jiZcANjPrwNvIOcA817j+zX4VstSGtatcatb280UUUrW+Ckt0J2ACjcOWAw2eD1PPSvW/inpqLZW97YXDazPcFpL77cvmh34AU56bQAOQB3rs+rtU1UelzwquZexxH1fl5k/61Z8g2txDeQSHTLAxLMrq1o0pUCNQc8bScg8sSeNoI4xV/RvEa2uo20+nahfwWxzvNiRJLbtn5m6hSGID88HcAeles/FDStAbw3beKdVtbDy7+WW3SSwlWLymVQGKRoQQpLgDcACOnGTXnK/Dm/wBY0+e/0DUNN1ERhpoImQQzNIy7WHlZKsxXtwGxxjuqkKlBpS66/I6qdSjiIXlp01O+8F/Hq8t5IrXWLi1uw8blXhA3EbWOdnTnB5U9QRjOTXqmi/E7RPEFjbi2uRasNx8uc5SQ5JbnqrYIOCAf1r4rtbwaXfLY3lr9lu1fDWxsmU7s4LIG9MDKjhu3OMTeHfE+sabqBtNPuHgdf3iy5jMa7OdxAXGCuRjOSwA64qFi9LMwrZHTqNyhoev/ALW0Sy+HdB1CMh1juGh3q2QQ8Ybr3+71r5WZ8nJr0f4p/EfU/FU2q2jXWNJFzCY7WDKwlghy4BHscZ5G4/QeZs9eZXnzTufRZfh5YehGEt/89RGk5oqMtj3NFctz1uUerbeakV81WV8cdqeG70kwcTX0u98l8ZxkEZxntX1Z49+J2pa14atdCmvroaLAiT6bFdRFrrkFZVj2DaASGc5KjAByWwD8gRzFW4H9a+tvB/xSsPFPwt0nwtPDY63c2l7NfQrEohuA7cDfwWbIAwuAAR15r3cvrKKqRlK2n3+R81m2H5uSooXs/u8/wLnhvwPceH9PsNa8QabcJol1btNaWSM0ct8pBBaQjmNd3sM4HHevS/Dfi/Xl0W/0vT1jntdVaGJIra3QBY1fICsTwvPOwnJBzjpXnFtqF+005ktZ7cErEss0Mix+YMliGYEHOAAufXivZI7Hwj4c0/SWi1261XX9Q06RY1sYGRtMu3TckhkGBgEBWUnndwQVr2KNSTTnTei7/wBf07HxGMpRUkpq7fb+v66nmGueJV0e11nT5buBrmWdP3MFs8/AZgD5qDO4q/OD2HXGKw9FgmuLW6t7TWYI7a62JNY3ly0AkIYMAQ4GcAEA4yCQO9c1fad4h+H+pz6ZqcUllf8An+Xd2LHKXcextjpn5cbcMGIx1I6Fa9f+G8Hw4vfDd3J4j09bO7hgc28wlEUiyIB+/cucgKzOMFTvAHYAVnCbqTSlKx21KEaFPmSv6amFpvw11eG6VLTT7i9MhIW3jlikUkggFeR0z1wD9etZmqW+s2MwU6FczpCvkrDlmGBkb9xPBJ549qTQ/DcPg/xpBAviTPhoRm4nnu1E0dugXJVWjBO5+FG3AG8ZGc15ZD4lvo2aW3m1BEV9reZeyRlck7WAzwDg/exyK5pSaR0UsNKpJ2lf5M9SM3iCTwvdTXHhi4h0hZRH9qWDzVSXGVUq43HgsfTniptF8H+IdXewkk0y1061uJmSG71WJoIwu7hsnIwOfu8Et2GRXA2fxk1Kzt7qKyukvo0wZrpoVMkIJGcA53EEcHkH0qLxd8cPHXjPw3p9pqnii91DS9PEjW8CyeS7x5BbG3AxjDbh8v3hjI21HtaVrybukdkcHXeisl8z6A03xRpPwzt7xr++SWCF/IW8lOI5STyYgV3MDx0/vc1w3jr9tnVJPD0vh7wtp1pZ2lzPHKdQvII5ZwdzDIQDEfT7rEnoa+dbnxFNex2kUkay2zRmT7OwbdGCxwdpY7gduSe4JPHFZDpp73TJP5umupIdl/eoTkkZHDKPz/DOa5pYqf2HY6qOTUIS56q5n/XT+kb2teJb7XNSurq9mNzfzHMk6bfOmG0ZOQPmIBII6HHtWTp0l7eGa1trwsZFzsYKjKy8jIxg4yRwSRmrGq6KY9V3/wBo24mKh0EToHyMENx8oHy/3h/Om3l80MKzadZrmNlNxKy7mkYMWDgjgJuI9wep545XJ31PdjGNkki1aa/qVpZ3cC3c1pZmNWKzO2+VlYfMVznoSRxxjAPLEu0vUJhdW8kVxJNGzeYBc7WaNRyWZewxnGc7jjpzWa10IdRVruNZzdRboIJMMUDrnLN1AyeF5zjoO9vRb19Ps5NRSdUvbtQsKXnTaD8zAjG9jwADjoSeAKXMDgknZbnuPhrxWtpYXN5qcscM07xh5cFPLYAEK4XG77/IBz25ORV3Xfi4+qxz3slrdQaRu+zR28EjCe5dclWZjkJgIpKnoAQRzXjMdnq2rWRtrSOdIreM3LKzASFiTGGQtgFfmXBXOOck5yc3SYdXvr+10yxdmtopB9mit2Z1MmST93j58kZPt71p7R31PMWCptuUnr+RsaK934n1C7tbnWJra5aEzL5LFllOVwu7JUZH3cEDHan28niXwN4o+zwIV1NdoFvC5uMB2AVG4OZGJH3lGMHPzdPXfhl8P7XRdIgm1LU47rUIdoIt9kgTb8xBAUjcoIx3AJHUVieOvsfifW9O/sS2uZdTeTEKMqpcXGGPlpvUdRkgEkE+netIxlJptkPFQVSUIx938DqtF0eHWJ7y18W6HFqqW8ssQhumaJ4yBgKXHzKVYgjOckAHrXI/Ez4MWukyRr4b1JbvZvu542jKvHcKWIRzgB1Bwfl4+bJyeT6zcaTPY6bpFlHDbrdTYkuWwXKuMlpASfmLcLzVqe6bRfFaTaZfQ3UsUkMsV6loqZyuWQqwOedqg47mumVKNmntffr/AMH+tjw6WNnCpzQfy6Hw9420u40G9uLO5g+yy+ermLOSv7peMj0JwM1yrN6V6J8dvFk/iLx5fW8rAx6fLJbjG0kybyZCWAGfm49OAe9ebM3pXz9RpSdj9Doc0qcZSWtkKzbaKhaTacUVhc6+Uerd6kVsmqyydqer0kwcS0rdqkhkaCRZELK6nIZTgj3BqqJKcr1opGTidXp/j/xFYA/Zte1KEbt2BePjPqRnH4106fHbxx9kS3/4SW7ULM1x5gCrIXbAOWC5I+UcE4BrzDce9SJJgcGuiFacdmcdTDUp/FFP5I9W1P45eMPFGB4g8QXmsAYxJeENIm37uGxux7enTmuwXU1t9au9Qkm1DUbu4tw+oJp77o3jYiRmdmJOC+MnkbtvQnNeAW7PNNHEgLPIwRQvJJJwK9gl0K2sJoodU1VbXcdl15SSM0G19qAvtA2kbCRk/eT+7XbSrVHeV/mefWw1KKUUrei/yOiuvHWqapBZ6fbPb2Gm3LKHs4SLdIBlSHeVvmY5CsCWC4X3NcFJJd217JEktrJcFSrKl4g5JG5VXORnBJPc4OcddOx8NDWtbGn/ANoWFqkkqiQBSp+Vh85KghwNuQxKjH1NQ3ng260/Edy8Bgc4t7gSh0kQSEL5pUlcZ5VC3sScLRzSkRTp0qfuplLVvDr6LZ7fOtZ1meOZGt5ziUiPdnJ5CruA45JzjjBpLNdQv7Vo7vi+jmie3mhK5ixleUz8wzgYGCO+azdQuvtELpJYTzObuWRobvKkA4+bHbacjk4AI3cUWN+NAtZpIXjeSaJxbTRKUV9pySFXHA2kZbnd04GTlzK/kdag+XzLPifQZbHUbdbwW9kzLiORp1RflAV0b+JSGBAOO4OOc1VjtjqVt9lvxG96FEsVxG4BZB97nkMB13dcD2xUUmozNFGpnZbWJVgu2cAqj4O1wDnJxkdOduPeqyakluHtPswWIlWHksQ8h3DDIOQD3+UgYwDmp5lc1UJWSNHxRDBpsiRw3MUqSQjdcwxvIsoOQQCwACg4PTOcZ6Cs+G6ttDSKdUmN1kvHG0iqE+UDLjBPPXaeMGtbXJtKtfK/0hi8kedrQBvskvyliuG2knI4BIAPqKwJLayikdp0uJCjM0kzyBVYdFCEAlmJB579aUvdejCmvdSZ2PhfVrddR03VLvTrTWbO1uhIdPvmkk+0Nv8AmhZuG27sNuBHDdQc1W8T3i6xrM12gj0iyaUxxMrNHGign5VC5OMEkcYx3GDWfomuSW7Tzw2drbyx2MzRRlZHWOIpgZyx/iwygjqWb0rHutWk3Wk0kEV09zEFlV4yWbacAZHPTYR7kVTqe5ykql+85rHT6HqRs7K/mtrWYmCNk2XuJxh3iUYHG3KluRzjPNWna3s7iK4a4SZtyvukaRbmFCwP7sYI6jBbge2Dluq8CaTbaXoN9ol7GkcmuQMIrpMqIHUgIo5OMkkNgjkDsMnCuvhDqemtF5VrqNzumWa3msSJUDnjHmcdSAOOuc445r3rI5lUpuTUnb9Tci8RNc+G7T+zpnggYkC2RBI3mtIfMPmR5wTwBhV+8teweE/hBceC7ODxPqtiu+9iMFnwHSEDInXth85Ge24gdMng5PA8HgTXorW4lsl1FkjkW1jOz7O20earbhuE3VDj5RxtxnIvTfEbVrjS3s7SN4bRpD5aROJAGCMEGAeCTvBLAnJPNdtNqm3z7nhYuMqsbUHo9z33S54prOe4vGhJhhSPbI2DtCjcVA5AAZc/nXBfGLxNF8P/AAre38NvNb6hcxbLdrlDCfMkzh06llEYLZ4zUXwyEuqSQQahdQWstwZTLcXTOmMqTtPykdAoHuRXgH7UPxI/4Sbxp/ZcNxNJY6SnkhJnyVlIBdeuNqcIoHZTW+IrKNLm+SPHy/L5VMXydFqzxO+k33DE9Sc8DH+evT3471TZyKbLIZGzUZbFfKyd2fq0Y2SFJzRUTSUVBtYerU4GqyyVIr0Jg4lhXp6vVcNThVXM3EtCSl8z25qsGpwkNVzEcp33wd0vSdd+Imj2GsajJpdrPNtjuo0DYk/gBJ4AJ43ds57V9l658L/hjY2cNxr3xRM3jGTVGa6u0ErNc5eNVjnkYDCqGG5gi4AGc5XHwV4bntY9dsmu4pJrYvteONghbIIAyQcckc19EeFPGvh23uLLV7WwvE11tP8AJmhup0uIrhniVdxXAkVWLE7AzAZyuMZr3MFWjGlOMrO/f+t/PRnzmZ4erOpGcJNWXS39fmvK9mux8RXnw1t/DWvWPhjQNOur9YEivLi6Mm4qGUOYgsuUZGHfJKsAxUDFeMWvj+30PUrNraxs4lJ8lbSCGSbq3Kv5zFOr9FUjkdK5jUPEWpC6kutgttOjjaIWsSYiiG4KyMFGG4yc45x2IxUlvptpdQ6jqazSWt6qKtpDHGJEd/lLuzlvkCx4cNzksOnzAZTrutJcqSt6Lz/ruzajg40Y++20+7v5GpqXi6K8ZfO061g09CbS6WGRw0jAADo2GIPfaB8m4Dis/R9Y0mbVt+p6Xcw2ySgSraXAAOOioGXjjIBGMD1zisu/tftlxqMEaSJZW5WePEWS2QC3AOCSHH0A5wBSllmm+1iFjIkBjW1jcyGJwApLsB33ZPc5PoK5XNyd2dvs4qNkXIdJXVryWC2voY7SQfL9sRoAqsNyyFuVOCOu7cRkYHSqN95tuiabHE0U8SbI7jbhpdxJKj0VuSD1PTjOBNi91TTRbmMRSnctpG8oxFGCSyAH5gpwAMjJIb1pmkD5Xt7u/jurXh5LfG8x46vuOFjxk8579+lLmWyKtbd7Fby/tVtYrgbVBeRsgAARrg5PQDByO/Qc4p0DRXkIjk8vyosraLIwHnOBlg/senoDhB1OOzuPCtn4h0OOTR476ZIJVjvZGZPmc79hzjChscZJBPzZPSrEvwnv54YbvVpoPDmnrGqkTXivtjH8HygjBPzEZIyc9cihwlujL29OPxu35/ccBZyyf6fO3mCVrZkLMcMSWAY47YwVP0H4dd4Y8NvaW8k93Gou0kUwLuC+TGfkMhyAqk4Q5PYBq07e48G+H7G5ktJ77XtQ8sBJmtUijmxwp2ltz4zkAgbwuOoOeVXVr3xRqW2TU/tFvOWQrBG6BSwzllGT1UHJ/On8NurE3KqnZWXd/wBfmdLeeKLPS90Dn7abW2+SC2YAJPvX5s5O8hm5ACgjPpmsu68WXdnJd3OiX39j2YCs32UsrOXGQrsuGVc9sADGMmuKkVr6G/u0uLdmYx5O8rgE5B5x6AfhV+4s7lpLDa3EcWbhopULEr8gXg/3dic9yaj2j6GscPCO5rapd6l5M10ZGvriR1lmkWfdLtyGjckHcMk87gc/Ke9dzZQQeJ20mKxvCDeyWzBZ32F1K/MhwSNyt5oDZ5AwecZ8z1Ca4n1CG9ngkhcQRynbG3kn5Amw7eUGBtGOO2OK9a+FlhNJptvdXG57fTpJY1e4QsSG52LIMhmyzDqBgqe5qoSu2jDFRUKfN/X9bHo9/rl54K+G2peMJbsRxvPIsNsZ8SGUMTgLn7gdkAPufSvjG8u5r64lnuJDLNIzNI7dWYnJP616z8ePHkWpW9h4ftQUFvtluNrDb935FI67hkkkkk/KTyK8baSssRUUpJR6GuW4b2VNzktZP8Og9mqJnpjScVGzVxOR7aiPZqKiorO5pYUNinK9MooAnWSnrJVYNinBqrmIcS0H9aduFVVfFP8AM9qrmI5S1HIY3V1OCpDA+hFekeIpZtKjhvru8urdr6Jbq2Cbcy8kBsDACrzgk4LYPQEDy9ZK9Ruro69Z6TBDbxvKtmtvGoRgrMiqSoGcZO8H5uCzZ4JIrppu6djkrRs4voUbXXruaG4+yvJBLq4S2Z4STLKDzIJD0cbwPQgEEdK2rWxlkjhW5mgh06AiKa4MWTKgJfC46MjBjjg5IyABmpNHutG0jw3LE9otjrEJkEd2uZQSzIsqICVAZcBdwwPvcnIFYs2oajCrtHeLcRGMJcWqboljgJ5TyyF2Bjzk/wB0EH5uei/Kk273OW3M2oqxra9qhm15V03SLWwsbmILHJIxMkqyKUMjMz4ViQNwUDB+U9MVhaXeRnTZLa6MJN7KiIyvKxgClsyBWbawzkEYIwpxzip7Twfe69DDbQxNGsTkC4kIaNCQGDo44ZCASRkkYH3uh6C58Ex6Sb3UNZJtrYZSP7U5WOCLhmyo+Ync2NoyTlug5qXzPUV6dNcl9fx8u5y8NrJrTCeyE8mnqViQ7zHgAjA8tQOcjJYZAPfPFdfpvheMbb6VraytoXLTeZtjt4WAGWkfO5m6nYpyDxha5678dRwSiDw1YTXE2dg1C4jw554ESJgIvtnH61mzalPfXYt9Um85nXZPIsq5fJ4RUB7NgjaBkjPIxU8yXmEoVZ+S/H7v69D0q++L2l+FobWy0KFr8tCIkuryMrCv7tdrCEdizHOfXuRXAeJta1DUp21S9v3vtPkLCGzuP9XGwz8hQD5VB/iAG7gDBzih4k8OPp+qSQM8eoxWyKkf2N94uDjOQOGCcjJ2+w61XEl5Iy3FyBDFc4jnSddoDqCFIVvVcYUerDsKcpybtIqjh6VNKcN+7/r8hkV6l9DPPgRzyzKMdiBknDdiPl25BA4xxVuxlm0fVbd4SYNZEoMjrjDJkg7SOC3PzY4Iz/tZuHw6mjw2zANczl5HNvbuN0AYBQQ7Dbkhcq2GOM9D0xbe+l0u4+yWTxWs6vysGZnLKexHAwQeQR1z6VDvH4jo0lfl1Ny+tZLaD7bdLBBZs/mrHdR75CwACqo5bOWPUgEA9watahp2kS+BYZIfOOs/2gyXdsQY4DCFGx/M3EZ8zcCozgnrWvfDRI7C1uYGaK4Yu8sLRrNFJltyzRrnJ2hsBTuBY8cVyE2h3U1zaWYu4rky2zqLgSHyyrszK2SMKMhe469ODW3Ny30vdGEHzWu7Wf5f1/ViOOPT7OxtZ1ScyR7lbEgSNAGJ3E7QTycbSATkYzXffC34hLbxXGlLJImmSRTPFbzSgxeaEVEdhgYJJ5PXCkcjFeZy2s/2ERxrNIkFxvZ4iCXYrjcTzjBXjjgH1JommaytdLWIBHVFup9zLHwW2AAfiTwM4bPrXNGo4u5vUoRrRcZamf4u1zVPEHiC/v8AW5PM1WWTFwfKWM71+UgqoAB49OfrWGzV1HjaNLwx6lG++QkW91gY/fKow30ZQCD3IauUrnqSlKTcne53U7cisrCls0lFFZGoUUUUAFFFFABRRRQAu6jcaSigB6tk17f8PtB0z4h+G7y3sdRj0vWbdY3OnTLuW5KqFMqkfMFG1Hb0IwOCa8Nqxp+oXWl3iXVncy2lymds0DlHXIIOCORkEj8a2p1OR67HNXpOrC0XZn0HJ8FvGPijXLe5h0X7ctuxSSS1KeXcRZxtcbsgtzkkAAtkklt1bdj+zfqFlfmTxVqdno0qOSswJeZCPuqFyMqBgZyduABkcV85v4w12THma1qEn+9dyH/2atfSPip4p0eZWTWLi5Tp5V25mX6DcSR+BFdHtqfVHmzwuL5bQqJfL9bs+stA8J2Wh2N7b6To513UUhWB9SvonkMEbnCTpFFtViGIALFuCCO4rxH4sP4tttcurDX7q6TV9JO17aSwRZEGFDABsY2napAPQjjit/4c/taT6QWstaivIbK5TyJ5bGQOQp4OFfkDHbJ9e1P8QeILHXNQvNYWZPFkV1OWN08TgSKQcJIAQwfAwC2OCRzgA97q0p0OWLd7/K357nj0KOKw2IlKvBOPR7/novRHk8esy/bvtjGa8iLsk3mRxQoqnhsZB2g5OBweParGnx2trcJClol7dzYKfuxs8onlwFQMcjAHTOc811eq+H9La6trm+ga407dG0UO9o2ijY5weCE7jkHPPFUL7QZbeKdbeZbdbMfaZJArbRCAdkbMMtlTzt75IA+XjjXMup7SqwlZJGn428XW/jDWmln03TNLvFtofsVrpaGNGiVFBVgrbUI2M24nqWyOc1z1v4otrKG4sTGIPM8ndOqK7xuSSGSUgOPdlOCCQARisHUbe6k0+zGlIZkj2IZbcb2kyNy5A5ABRzt9uc9pNG2Jud7YXMG9ZfssvAjZfmdfVV7jsQfUGnOtKpO73ZcKEIQSWy6EmpaQdS1BrVLlbhrdfIt2lkKSl1GDGxYYDbtzAZxyecHIrQtMkDx3UL31rFFia6ViTxkLHHIM/KT274JwAKfcXEjQ+fpk/wBukcpFdyuMMy8YBGchQeN3+ypyM4EU1umoXFtLpsjPDbzA3CqcyFs8yZ4ypxgNx2JwWIrDrc6I3tZl3UP9P1F47J1ErW8SrazEA/ul8sru+6RtDdxxjjOav65/ozSWEVxNb3JVY7e+kDRmUqF3RseMDOB7kBz1zWbDqV3Db2Mbn7XJ9r8qfzYw+9XClkXK/dxnJz6Y4xUkuqTf2lc2dxp0k9rM7o3liQKh3nDIDkDIAztxwTVcy1fcz5XdLsUjldSvFu7by8bbmRlTy3QAnfkYIyNzDpnOMGpVhufEmoRRWt2h/dx71u1GI1I/2srtUHAwQTuxXYS6Bptx4ZgiuXni1+dZ4jp84BaKBAkiv5mQXBP8I5AUnv8ANzWu6fLbmWJL/T1tFISDbMFWRyoVpAOPuqMYY5UtzyTVVKbhv/X9feTCrGb93cfqUOnSSSW0sZtt9m0G2IbEdoQdsjk8GTgE4wvOMgEmuF1PTJtNcrKuFJO18HDYOCOehHp/9bPZaBpN82n3MYmjuI4N7Dy8zL80TgfdBGeAefSrmmaems7bPVw0SyS/NdRQtIsa5I3HLABc9AP73AIJU5uPP0saxqeyur3SPM6K6fUvBtxYrJMj7oVJDb0bchBxhgucexPB7E9Kym0ecWdxcK8DwwhSzCZQeWAACkgk89AMgZJ4FczjKO6OxTjJXTM2iiipLCiiigAooooAKKKKACiiigAooooAK0tF1zUNBvFudOuntZh/Eh647EHg1m0CmnbVCaTVmeweEvE1p4nV/tbfYL+B3uSy/NHcAjLoS3KhupBJXIPTNdHNO2oafcssP2S4kdZjalzjzCAzsAfvA7Spzzg8cLXkHge8Ww1y3kfIEri3PHA38cnPH5V6TeXEljoukwFDMgnmIxIyyREEYC9Qo+8e+cYrtpzvHU8TEUVGolE47WtDudJvlht1kiWa3aS3Y/L5ZR2YqWzxtXcCfTnvRpOsPZ6PrFmJ/tkd1GEkdkV2Zlbf8rMCVXaG6fezzwcD1K4t7bxZ4e05QXF9D87XcfyyOTyBMrEgBlyu4EK2FJJIzXmOo+F5vCbW0jgXKRTO6xN8rSOCAUZDz8oGT2OcDrmiUeXVbGtKsq0eWe/+RXXUL3w5HC8UyGafcR8qKTCyjcCuMAuMZz0GB35t6Jrlzpl8l1b3P2S4lH2eFw2xJo3Uh+BwMq2CDxk4yMViw6bqE91ParazXcJmZpN5IDnoCCRw/uOuQOe/Qax4WkuI47Vry18q3Um3mhXfJL3kBC5+bPzAZ4wefmzWcebp0OifJtLqVre4lmjmkkV2Ns6TTw72ieIqGBIGcFenzY9j6mnJDClvZXCtv1OZAscUsZkKMowGyOdxBBUEDopNep/D258FeE/7cufF1le6obnSZZLGOFo08pnGUY7s/Jk8R5+YDtnnzyw0uHUY5FsBLcXdzIJ9u7EttHg7wVPLb1wQwJ24wfv8dU6PLThNSTcr6dVb/Pp9+xz06ylOSSaStr0f/DEsdnLdX1hpkG6e9Xy7ctb4kL7zlospznL5HGSykf3ayrzUjczXFsFWUh2WWAsAtw+SWdf7r54GOuO/SqFvc3g1qK5Yy2ksbNMCzlSAuX4PHTaOhznpzRDqs18qtcyy7m5NwVLjcCOGB69VGR68g1yOSOpU2nfct6bbRx2dy1u5mgmjeEOYQpDFVCqxyeck8c5xkdSKhh0iaHR7e4ja1Rrk+Y6+dtZFX7oIbpuKlh/wH6VqWmsyNN5k1pHLcyzxkMyK0VxCCztvdcZbgZOOf9lhzQ1KaSW+tr+ywsM/mEJGnALOcxbWOSBkDkk4xTtGw05Xsyyzf2XcPdXEEwnSf7ObcoRFNCcnLSE8Hj+RyNtUb66vbuZIvNa+hZALXzAhAAbBXoRkAnJ49ckYq/fSQGQJakNZCNJLu3VuQ2wfvEDZ3KpHB68HscnDa4l0iG8sp8tDIVBWM7S2OQytg8EEE+uRnoKJPlVug4K+vUr6rcWzGOOCKLzELGS4i3KJCccBd2AoxwQATk57AFZ3yZPXHvRXM227nWkiOiiikAUUUUAFFFFABRRRQAUUUUAFKvWkoHXjrQBbtEeVX8sEyJhx0GO388V7dcQ2OuW81uLxZ51SEyQwDLROVHmBg2DkO/UZHFeO6aVsYXvHAZs+XAOPvf3h3wox+JFbFneQ6TrVxeTxXbRKXhRoG8ooxTCt5mG5UhTtxzjqK6acuVa9ThxFN1Nnt/wD0rwvrVvY+KHb7NJdK0gcLJNsEgGNoO1R1C45NbHxG+L3h74seKNQ1S08PW/h6BSAkNqoYxxAABwGyzJjkgEFc5HWvLbXxcxtZ1ighvLryysM8krRyrkjJYcK2RkevPU9KyZr250XWBIsaWSttdGkiwQjKCoJIY4xx7gV1rFSjSdFbN32OFYKMqjqS+JKy1/r+u56RqFnM32e585L2ONCoE295NwJG4Bvm4GOE/ujvms+zMelqnlRzJfMoJgkVmWMkAgsQMh1PA492zkis+fxhfDQofss6F/NaR7QnYkDuBiSPnqygbemMYO4gVi/21eeS/2ieVnQhPI1JjnJG7Cv97v3I6isXJFwoytZnY+INBkTSv7TeIS2VwhVVLBVMglQsrE5IGCCSTjBGPbhGstT08x3JguFu7pt0s2zJRSc7ef4jwSDjjA7mtu+1aws7GazvIrizvYUjnS3kRXUuxV8E8cbfLOT1x+NcpdagkKrLBtZ5SXeSU+ZJuzznIAz36cZ61M2tzooRmotM6WSyv7nS7rVoFnsRHGftX2h9ijzCqhlBPzKTnpzk89RWFBqFozqkyJqD/xbo1jTHLHDYDH9KzbaGXXLzy1dfOIdg08gG7AzjJ4zU+r2ZszEhge3Qjeobdg5UDgkc8g8jr9AKz5na6OiMEvdbNiw1a1ka8zZwWuEZfL/AHj25ZiQON2V4J5BPet+OKyGlWrrb2w+1RmNLaFnmmyzsDLGd/zHOQFYg4L8GuRmhs209nF9HA0kxBgy0koCqCGJCgEMXI47oenGb0zWOlxRylZpzHGkMJjYRHeV3Mykhum7r6sKuMn1M5QUnpcg8TGO3uLUWNulqbVPKeWGVnDsGPz5JPBzweMiq15NDrGnvJNKkGoQgP8AM+VnQkcA9iCc4926YwE1vV/7V0exhS3RBBLMFkPMrKduFZs5YAeqjknr2wO1Yylq7bM3hF8qvuhVB+n14optFZGwUUUUAFFFFABRRRQAUUUUAFFFFABQKKKANqzvYmtYrW8YvbxsWX58tGMjITt6nHQ57ECrFvePJqF5b2t1J5d3IzRFcoQ+47DjPU5xwTjdXO0+F2jkVkYoy8hlOCKtSZDimben3F5f3WGht7jbhXa4jGF7DJGCf1rda+0+Hy4L1TBCVEDlpTNL5YI+VUP+rUMCwG4Hnv0rn9S8TX2oRhCyW0S8+XaqEUsQAxPck4yST1/CsVucmtOdR21I5HLfQ1bfUEg1KQndd2rkq6y/K0qE9TzwRgEHsQK1SZ4lS3L2E9iRGyrNKnK4J/vbkJDc45rlFJDAjrUkkruoDMxA6A/QD+QH5VCnYtxudPHo9pcMFE0CTvjan2kNEBnOOCWwQPwzzWZeN9juZo5/s8zL8rGMb/M+YNw3bj+IckDB4NZG40lDkraISi1uzRgSO3jW5jaTergKRgEEckgg8Y+X862JNRtmmjuo7yeFZSu+EIHiVgRu4L5I5BGQO/pXLUUlJobjc6G6utJvbpjMZYlzw1tGcAf7rP39sVR8QagmpajNJDuW2X5IVYYOwdCfc5J/E1mUUOTasEYqIqsVIPcdKGYsxJOSTkmkoqCwooooA//Z";

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 1000;

    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
      let row = [];
      for (let x = 0; x < canvas.width; x++) {
        const red = pixels.data[y * 4 * pixels.width + x * 4];
        const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
        const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
        const brightness = calculateRelativeBrightness(red, green, blue);
        const cell = [brightness];
        row.push(cell);
      }
      mappedImage.push(row);
    }

    function calculateRelativeBrightness(red, green, blue) {
      return Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) / 100;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.5;
        this.size = Math.random() * 1.5 + 1;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
      }

      update() {
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.speed = mappedImage[this.position1][this.position2][0];
        let movement = 2.5 - this.speed + this.velocity;

        this.y += movement;
        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    init();
    function animate() {
      ctx.globalAlpha = 0.02;
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.5;

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].speed * 0.8;
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return <canvas ref={canvasRef} style={{ width: "100%", maxWidth: "500px", border: "1px solid black", borderRadius: "10px", boxShadow: "2px 7px 10px 5px rgba(0,0,0,0.7)", margin: "70px 0" }}></canvas>;
}
