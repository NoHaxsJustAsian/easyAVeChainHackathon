import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import { url } from "../constants";
import { TagOption, TagType } from "./Types";

export function MultiSelect(props: {header: string, selectedOptions: TagOption[], setSelectedOptions: ((tags : TagOption[]) => void)}) {
    const [tags, setTags] = useState<TagOption[]>([]);

    function handleChange(e: any) {
        props.setSelectedOptions(e)
    }
    
    useEffect(() => {
        axios.get(url + "tags")
        .then(res => {
            const tagsGotten = res.data;
                tagsGotten.forEach((tag: TagType) => {
                    const tagName = tag.name
                    tags.push({value: tagName, label: tagName, id: tag._id.toString()});
                });
                setTags(tags);
        }) 
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <header>{props.header}</header>
            <Select
                isClearable
                isSearchable
                isMulti
                closeMenuOnSelect={false}
                name="color"
                options={tags}
                value={props.selectedOptions}
                onChange={handleChange}
            />
        </div>
  );
}