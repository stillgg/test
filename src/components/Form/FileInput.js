import React, {useState} from "react"
import {CrossIMG} from "../../assets/image"

const FileInput = () =>{
    const [inputFiles,changeInputFiles] = useState([])

    return(
        <div className="file_input_wrapper">
            <label className={"file_input"}>
                <input type="file" multiple
                       onChange={
                           e => {
                               const files = Array.from(e.target.files)
                               if (files.length) {
                                   changeInputFiles(files)
                                   return
                               }
                           }}
                />
                {
                    inputFiles.length ?
                        false
                        :
                        <span className={"files"}>
                            Прикрепить файл
                        </span>
                }

            </label>

            <div className="files_wrapper">
                {
                    inputFiles.length>2?
                        <span className={"warning"}>
                             Не более двух файлов
                        </span>
                        :
                        inputFiles.map(
                            (item, index) => {
                                return (
                                    <div className={"changedFiles_wrapper"} key={index}>
                                        <span className={"changedFiles"}>
                                              {item.name}
                                        </span>

                                        <img className={"cross"}
                                             src={CrossIMG} alt=""
                                             onClick={() => {
                                                 const inputFilesIndex = index
                                                 const filteredArr = inputFiles.filter(
                                                     (i, index) => inputFilesIndex !== index
                                                 )
                                                 changeInputFiles(filteredArr)
                                             }}
                                        />
                                    </div>
                                )
                            })

                }
            </div>

        </div>
    )
}

export default FileInput