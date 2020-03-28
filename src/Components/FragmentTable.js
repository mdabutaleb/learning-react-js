import React, {Component} from 'react';
import FragmentColum from "./FragmentColum";

class FragmentTable extends Component {
    render() {
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <FragmentColum/>
                    </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default FragmentTable;
