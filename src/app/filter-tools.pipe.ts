import { Pipe, PipeTransform } from '@angular/core';
import { ITools } from './content-list.service';

@Pipe({
  name: 'filterTools'
})
export class FilterToolsPipe implements PipeTransform {

  transform(tools: ITools[], experimentTitle: string): ITools[] {
    return tools.filter(tool => tool.experimentTitle?.includes(experimentTitle));
  }

}
