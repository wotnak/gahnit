import { Device } from '../../data/Device'
import * as sql from 'mssql'

export const resolver = {
  // Queries
  Query: {
    search: async (parent, { query }, ctx, info) => {

      const matchingDevices = await Device.find({$text: {$search: query}})


      const request = new sql.Request()
      const result = await request.query(
                   `SELECT
                      adr_IdObiektu AS id,
                      adr_Nazwa AS name,
                      adr_Symbol AS symbol
                    FROM adr__Ewid
                    WHERE adr_TypAdresu=1 AND
                      (
                        adr_Nazwa LIKE '%${query}%' OR
                        adr_Symbol LIKE '%${query}%' OR
                        adr_NIP LIKE '%${query}%'
                      )
                    ORDER BY name`
      )

      const matchingCustomers = result.recordset

      return matchingDevices.concat(matchingCustomers)
    }
  },
  SearchResult: {
    __resolveType(obj, context, info){
      if(obj.owner) return 'Device'
      if(obj.name) return 'Customer'
      return null
    }
  }
}
